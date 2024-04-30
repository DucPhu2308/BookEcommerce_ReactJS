import { axiosPrivate } from "../axiosClient";

class ParagraphApi {
    static async getParagraphs(id) {
        const url = `/paragraph/chapter/${id}`;
        return axiosPrivate.get(url);
    }
    static async postParagraph(data) {
        const url = `/paragraph`;
        return axiosPrivate.post(url, data);
    }
    static async updateParagraph(data) {
        const url = `/paragraph/${data.id}`;
        return axiosPrivate.put(url, data);
    }
    static async deleteParagraph(id) {
        const url = `/paragraph/${id}`;
        return axiosPrivate.delete(url);
    }
}

export default ParagraphApi;