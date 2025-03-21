import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        getFetch();
    }, [url])

    const getFetch = async () => {
        console.log("Fetchig ")
        const resp = await fetch(url);

        if (!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            })
        }

        const data = await resp.json();
        console.log({data})

        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })

    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }


}
