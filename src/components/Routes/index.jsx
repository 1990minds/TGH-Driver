import React, { useEffect } from "react"
import RouteTracking from "./route-traking"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllroute, routeSelector } from "../../api/route";

export default function Demo() {
    const navigate = useNavigate();
    const { all_route } = useSelector(routeSelector);
    const disapatch = useDispatch();
    const handleClick = (id) => {
        navigate(`/routeindepth/${id}`);
    };

    console.log(all_route)
    useEffect(() => {
        disapatch(fetchAllroute())

    }, [])
    return (

        <>
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Routes Available</h1>
                        </div>
                        <div className="flex flex-wrap">
                            {all_route.map((route) => (
                                <div key={route._id} className="xl:w-1/3 md:w-1/2 p-4 w-full" onClick={() => handleClick(route._id)}>
                                    <div className="border border-gray-200 p-6 rounded-lg">
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                                            {route?.from_location?.name} - {route?.to_location?.name}
                                        </h2>
                                        <p className="leading-relaxed text-base">
                                            Distance: {route.no_of_kms} km
                                        </p>
                                        <p className="leading-relaxed text-sm text-gray-500">
                                            Stops: {route?.stops?.length
                                                ? route.stops.map(stop => stop?.stop_location?.name || "Unknown Stop").join(", ")
                                                : "No stops in between"}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

