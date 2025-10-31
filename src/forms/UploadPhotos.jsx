import React, { useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

export default function UploadPhotos({
  onSuccess,
  endpoint = "http://localhost:8080/api/v1/image",
}) {
  const [show, setShow] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const handleClose = () => {
    setShow(false);
    setError("");
    if (inputRef.current) inputRef.current.value = "";
    setCount(0);
  };
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    const hasFile = !!file;
    setCount(hasFile ? 1 : 0);

    // (Optional) Validate size/type here
    if (hasFile) {
      // Example: limit 10MB
      if (file.size > 10 * 1024 * 1024) {
        setError("Max file size is 10MB.");
        if (inputRef.current) inputRef.current.value = "";
        setCount(0);
        return;
      }
      setError("");
    } else {
      setError("");
    }
  };

  const handleUpload = async () => {
    const input = inputRef.current;
    if (!input || !input.files || input.files.length === 0) {
      setError("Please select an image.");
      return;
    }

    const file = input.files[0];

    const formData = new FormData();
    // IMPORTANT: field name must be "image" for upload.single("image")
    formData.append("image", file);

    setIsUploading(true);
    setError("");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok || data.status !== "success") {
        throw new Error(data?.message || "Upload failed");
      }

      // Try common shapes: { image: { url } } | { imageUrl } | { url }
      const uploadedUrl =
        data?.image?.url || data?.imageUrl || data?.url || null;

      if (typeof onSuccess === "function") {
        // Pass single url if available; otherwise pass the whole payload
        onSuccess(uploadedUrl ?? data);
      }

      // Reset and close
      if (inputRef.current) inputRef.current.value = "";
      setCount(0);
      setShow(false);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-secondary d-inline-flex align-items-center gap-2"
        onClick={handleShow}
      >
        <MdOutlineAddPhotoAlternate size={20} /> Upload Photo
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Upload your Pic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            ref={inputRef}
            type="file"
            accept=".jpg,.jpeg,.png,.webp,image/*"
            // Single file ONLY
            onChange={handleChange}
            disabled={isUploading}
          />
          <div className="small text-muted mt-1">
            {count === 1 ? "1 selected" : "0 selected"} (max 1)
          </div>
          {error && (
            <div className="alert alert-danger mt-3 mb-0" role="alert">
              {error}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            disabled={isUploading}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleUpload}
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Upload"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
