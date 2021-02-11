import useSwr from 'swr';

import { BASE_URL } from "../config/urls";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export const useRequest = (path, name) => {
    if (!path) {
        throw new Error("Path is required")
    }

    const url = name ? BASE_URL + path + '/' + name : BASE_URL + path
    const { data, error } = useSwr(url, fetcher)

    return { data, error }
}