import { useEffect } from "react";
import FontBold from "../../elements/FontBold/FontBold";
import axios from "axios";

const Landingpage = () => {

    // useEffect(() => {
    //     const getUser = async () => {
    //         try {
    //             const responUser = await axios.get('http://34.101.160.237:2424/api/v1/users')
    //             const dataUser = responUser.data
    //             console.log('users: ', dataUser)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getUser();
    // })

    return(
        <FontBold>Ini Landingpage</FontBold>
    )
}

export default Landingpage;