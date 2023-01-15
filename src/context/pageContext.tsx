import api from "@/services/api"
import { useState, useEffect, createContext, ReactNode, Dispatch, SetStateAction } from "react";

export const Context = createContext<IContext>({} as IContext)

interface IProvider {
    children: ReactNode
}

interface ICharacter {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: [
        string
    ],
    url: string,
    created: string
}

interface IContext {
    characterList: ICharacter[],
    setCharacterList: Dispatch<SetStateAction<ICharacter[]>>,
    currentPage: number,
    setCurrentPage: Dispatch<SetStateAction<number>>,
    previousPage: () => void,
    nextPage: () => void,
    isSideBarVisible: boolean,
    setIsSideBarVisible: Dispatch<SetStateAction<boolean>>,
    showSideBar: () => void,
}

interface ResponseCharacter {
    results: ICharacter[];
}

const Provider = ({ children }: IProvider) => {
    const [characterList, setCharacterList] = useState<ICharacter[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isSideBarVisible, setIsSideBarVisible] = useState<boolean>(false);

    const showSideBar = () => setIsSideBarVisible(!isSideBarVisible);

    useEffect(() => {
        api.get<ResponseCharacter>(`?page=${currentPage}`)
            .then((res) => setCharacterList(res.data.results));
    }, [currentPage]);

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const nextPage = () => {
        if (currentPage < 42) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <Context.Provider
            value={{
                characterList,
                setCharacterList,
                currentPage,
                setCurrentPage,
                previousPage,
                nextPage,
                isSideBarVisible, 
                setIsSideBarVisible, 
                showSideBar
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Provider;
