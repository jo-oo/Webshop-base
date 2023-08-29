import { Link } from 'react-router-dom'

/** Icons **/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

const HomePage = () => {
    return (
        <div>
            <div className="w-full place-items-center overflow-hidden ">
                <Link to={`/products/`}>
                    <div className="bg-slate-50 p-40 mt-[110px] xs:p-10 lg:p-30 md:p-20 place-items-center text-5xl">
                        <div className="">
                            GET READY FOR OUR NEW AUTUMN ARRIVALS. JUST A STEP AWAY. --
                            <FontAwesomeIcon icon={faChevronRight}
                            className="text-4xl"
                            />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HomePage