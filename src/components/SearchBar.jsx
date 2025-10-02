
import UploadPhotos from '../forms/UploadPhotos';

const SearchBar = () => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center gap-3 py-3 ">
      <input
        type="text"
        placeholder="Search your photos"
        className="form-control w-50 rounded-pill px-3 shadow-sm"
      />
      <UploadPhotos/>
    </div>
  );
}

export default SearchBar