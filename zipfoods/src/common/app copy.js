import Api from "@/common/api.js";

export const config = {
    firebase: {
        apiKey: "AIzaSyDL8rdGe_OGvNDX3uebReo8cUhTO30EsD4",
        projectId: "e28-zipfoods-ceb005"
    }
};

export const api = new Api({
    apiKey: config.firebase.apiKey,
    projectId: config.firebase.projectId
});