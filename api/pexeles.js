import axios from "axios";

//563492ad6f9170000100000123e9bbb900734bbfb51d17553825293b

export const getImages = async (search = "gaming") =>
    await axios.get(`https://api.pexels.com/v1/search?query=${search}`, {
        headers: { Authorization: '563492ad6f9170000100000123e9bbb900734bbfb51d17553825293b' }
    });