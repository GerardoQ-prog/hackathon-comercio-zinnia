const headers = token => ({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
});

const get = async (url, token) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: headers(token),
    });
    return response;
};

const post = async (url, body, token) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: headers(token),
        body,
    });
    return response;
};

const postFormData = async (url, body, token) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: headersFormData(token),
        body,
    });
    return response;
};

const put = async (url, body, token) => {
    const response = await fetch(url, {
        method: 'PUT',
        headers: headers(token),
        body,
    });
    return response;
};

const _delete = async (url, token) => {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: headers(token),
    });
    return response;
};

const patch = async (url, body, token) => {
    const response = await fetch(url, {
        method: 'PATCH',
        headers: headers(token),
        body,
    });
    return response;
};


export const http = {
    get,
    post,
    postFormData,
    put,
    patch,
    delete: _delete,
};
