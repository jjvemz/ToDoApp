 const del = () => {
    localStorage.removeItem('accessToken');
    return '/login';
}

export default del;