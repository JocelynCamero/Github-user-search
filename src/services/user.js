import {urlFetch} from "../constants/index";

const getGitHubUser = async (user) => {
    const response = fetch(`${urlFetch}${user}`, {
        method:"GET"
    });
    const payload = response.json();
    return payload;
}