import axiosClient, {axiosPrivate} from "../axiosClient";

class ChapterApi {
    getAllChapter = () => {
        const url = `chapter/all`;
        return axiosClient.get(url);
    }
    getChapterById = (id) => {
        const url = `chapter/${id}`;
        return axiosClient.get(url);
    }
    
    postChapter = (data) => {
        const url = `chapter`;
        return axiosClient.post(url, data);
    }
}
export default new ChapterApi();
