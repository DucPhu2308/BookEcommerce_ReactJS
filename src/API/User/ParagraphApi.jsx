import { axiosPrivate } from "../axiosClient";

class ParagraphApi {
    static async getParagraphs(id) {
        const url = `/paragraph/chapter/${id}`;
        return axiosPrivate.get(url);
    }
}

export default ParagraphApi;