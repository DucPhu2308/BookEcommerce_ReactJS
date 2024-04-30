import { axiosPrivate } from "../axiosClient";

class UploadApi {

  static uploadFile(file, type) {
    const formData = new FormData();
    formData.append("file", file);
    const url = `/upload/${type}`;
    return axiosPrivate.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  static deleteFile(deleteFileUrl) {
    const url = `/upload`;
    // params: {url: deleteFileUrl}
    return axiosPrivate.delete(url, { data: { url: deleteFileUrl } });
  }
}

export const UploadType = {
    USER: 1,
    BOOK: 2,
    PARAGRAPH: 3,
};

export default UploadApi;
