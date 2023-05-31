import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { API_USERS_URL } from "../../../config/Api";

import UserListTable from "../../../components/Table/UserListTable/UserListTable";
import FontBold from "../../../elements/FontBold/FontBold";
import Search from "../../../elements/Search/Search";
import './User.css'

const User = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        const getUser = async () => {
            try {
                const responseUser = await axios.get(API_USERS_URL)
                const usersData = responseUser.data
                setUser(usersData)
                console.log('pengguna :', usersData);
            } catch (error) {
                console.log('Error : ', error);
            }
        }

        getUser()

    }, [])

    return(
        <div className="user mx-4 mt-4">
            <FontBold $26 className="mb-2">Pengguna</FontBold>
            <div className="row justify-content-end">
                <div className="col-5">
                    <form className="search-user">
                        <Search
                                placeholder='Cari berdasarkan nama'
                            />
                    </form>                        
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <UserListTable data={user}/>
                </div>
            </div>
        </div>
    )
}

export default User;