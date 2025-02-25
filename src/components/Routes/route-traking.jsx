// import React, { useEffect, useState } from "react";
// import { Check, MapPin } from "lucide-react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchoneroute, routeSelector } from "../../api/route";

// export function RouteTracking({

//   rideId = "R1D3X458",
//   currentCheckpoint = 0,
//   checkpoints = [
//     { name: "Start Point", estimatedTime: "0 min" },
//     { name: "Downtown", estimatedTime: "10 min" },
//     { name: "City Center", estimatedTime: "20 min" },
//     { name: "Business Park", estimatedTime: "35 min" },
//     { name: "Airport", estimatedTime: "45 min" },
//   ],
// }
// ) {
//   const { routeid } = useParams();
//   const { current_route } = useSelector(routeSelector)
//   console.log(routeid)
//   console.log(current_route)
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const datastuff = dispatch(fetchoneroute(routeid))
//     console.log(datastuff)

//   }, [routeid])
//   if (checkpoints.length === 0) {
//     return <div className="text-center text-muted-foreground">No checkpoints available for this route.</div>;
//   }
//   const handleSelectroute = (routeid) => {
//     console.log("selected specific route",routeid)
//   }
//   const convertToHoursMinutes = (timeInHours) => {
//     const hours = Math.floor(timeInHours); // Get the whole hours
//     const minutes = Math.round((timeInHours - hours) * 60); // Convert decimal part to minutes
//     return `${hours} hrs & ${minutes} mins`;
//   };




//   return (
//     <div className="w-full max-w-3xl mx-auto p-6 bg-background">
//       {/* Ride ID and ETA */}
//       <div className="flex justify-between items-center mb-8">
//         <div className="text-sm">
//           ROUTE ID - <span className="font-medium">{current_route?.route_id}{console.log('current route selected is ', current_route)}</span>
//         </div>
//         <div className="text-sm">
//           <span className="text-muted-foreground">ETA:</span>
//           <span className="ml-1 font-medium text-primary">{convertToHoursMinutes(((current_route?.no_of_kms) * 0.75) / 60)}</span>
//         </div>
//       </div>

   
      
//       <div className="relative">
//         {/* Vertical Line */}
//         <div className="absolute top-0 bottom-0 left-5 w-0.5 bg-muted" />
//         <div className="flex items-center mb-8 last:mb-0">
//           <div className="w-10 h-10 rounded-full flex items-center justify-center z-10 border-4 border-primary bg-white ring-2 ring-primary ring-offset-2" >
//           <MapPin
//             className={`w-5 h-5 "text-primary" 
//                       }`}
//           />
//         </div>
//         <div className="ml-4 flex-grow">
//                 <div
//                   className={`text-sm font-medium "text-foreground" : "text-muted-foreground"
//                     }`}
//                 >
//                   {current_route?.from_location?.name}
//                 </div>
//                 <div className="text-xs text-muted-foreground mt-1">Starting Location</div>
//               </div>
//         </div>
//         {(current_route?.stops)?.map((checkpoint, index) => {


//           return (
//             <div key={index} className="flex items-center mb-8 last:mb-0">
//               <div className="w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors duration-200">
//                 <MapPin
//                   className={`w-5 h-5 "text-primary" 
//                       }`}
//                 />
//               </div>
//               <div className="ml-4 flex-grow">
//                 <div
//                   className={`text-sm font-medium "text-foreground" : "text-muted-foreground"
//                     }`}
//                 >
//                   {checkpoint?.stop_location?.name}
//                 </div>
//                 <div className="text-xs text-muted-foreground mt-1">Estimated time: {convertToHoursMinutes(((checkpoint?.kms_from_start) * 0.75) / 60)} </div>
//               </div>


//             </div>
//           );
//         })}
//            <div className="flex items-center mb-8 last:mb-0">
//           <div className="w-10 h-10 rounded-full flex items-center justify-center z-10 border-4 border-primary bg-white ring-2 ring-primary ring-offset-2" >
//           <MapPin
//             className={`w-5 h-5 "text-primary" 
//                       }`}
//           />
//         </div>
//         <div className="ml-4 flex-grow">
//                 <div
//                   className={`text-sm font-medium "text-foreground" : "text-muted-foreground"
//                     }`}
//                 >
//                   {current_route?.to_location?.name}
//                 </div>
//                 <div className="text-xs text-muted-foreground mt-1">Estimated time: {convertToHoursMinutes(((current_route?.no_of_kms) * 0.75) / 60)} </div>
//               </div>
//         </div>
//       </div>
      
      
//       <div className="flex justify-center items-center m-16">
//         <button className="bg-[#062D51] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#084075] transition duration-300"
//           onClick={() => {
//             handleSelectroute(routeid)
//           }}>
//           Set this Route as your Main
//         </button>
//       </div>


//     </div>
//   );
// }

// export default RouteTracking;
import React, { useEffect, useState } from "react";
import { Check, MapPin } from "lucide-react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchoneroute, routeSelector } from "../../api/route";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup } from "@mui/material";
import { driverSelector, fetchOnedriver } from "../../api/driver";

export function RouteTracking() {
  const { routeid } = useParams();
  const { current_route } = useSelector(routeSelector);
  const {driverData} = useSelector(driverSelector);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false); // Modal state
  const [vehicles, setVehicles] = useState([]); // Driver's vehicles
  const [selectedVehicle, setSelectedVehicle] = useState(""); // Selected vehicle

  useEffect(() => {
    dispatch(fetchoneroute(routeid));
    const driverid = localStorage.getItem("Driver");
    console.log(driverid);
    dispatch(fetchOnedriver(driverid));

    // 🚗 Fetch driver's vehicles (Mock data here, replace with API call)
    setVehicles([
      { id: "V001", name: "Toyota HiAce - White" },
      { id: "V002", name: "Ford Transit - Black" },
      { id: "V003", name: "Mercedes Sprinter - Blue" },
    ]);
  }, [routeid, dispatch,]);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const handleConfirmRoute = () => {
    if (!selectedVehicle) {
      alert("Please select a vehicle before confirming.");
      return;
    }

    console.log("Confirmed Route:", current_route?.route_id);
    console.log("Selected Vehicle:", selectedVehicle);

    setOpen(false);
  };
  const convertTime = (kms) => {
    if (!kms) return "0 hours"; // Handle edge case if kms is undefined or 0

    const totalHours = (kms * 0.75) / 60;
    const hours = Math.floor(totalHours); // Get whole hours
    const minutes = Math.round((totalHours - hours) * 60); // Get remaining minutes

    if (minutes === 0) {
        return `${hours} ${hours === 1 ? "hour" : "hours"}`; // Singular/plural check
    } else {
        return `${hours} ${hours === 1 ? "hour" : "hours"} ${minutes} minutes`;
    }
};





  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-background">
      {/* Route ID and ETA */}
      {/* {console.log('',driverData)} */}
      <div className="flex justify-between items-center mb-8">
        <div className="text-sm">
          ROUTE ID - <span className="font-medium">{current_route?.route_id}</span>
        </div>
        <div className="text-sm">
          <span className="text-muted-foreground">ETA:</span>
          <span className="ml-1 font-medium text-primary">
            {convertTime(current_route?.no_of_kms)}
          </span>
        </div>
      </div>

      {/* Route Stops */}
      <div className="relative">
        <div className="absolute top-0 bottom-0 left-5 w-0.5 bg-muted" />
        <div className="flex items-center mb-8 last:mb-0">
          <div className="w-10 h-10 rounded-full flex items-center justify-center z-10 border-4 border-primary bg-white ring-2 ring-primary ring-offset-2">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div className="ml-4 flex-grow">
            <div className="text-sm font-medium">{current_route?.from_location?.name}</div>
            <div className="text-xs text-muted-foreground mt-1">Starting Location</div>
          </div>
        </div>

        {current_route?.stops?.map((checkpoint, index) => (
          <div key={index} className="flex items-center mb-8 last:mb-0">
            <div className="w-10 h-10 rounded-full flex items-center justify-center z-10">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="ml-4 flex-grow">
              <div className="text-sm font-medium">{checkpoint?.stop_location?.name}</div>
              <div className="text-xs text-muted-foreground mt-1">
                ETA: {convertTime(checkpoint?.kms_from_start )} hrs
              </div>
            </div>
          </div>
        ))}

        <div className="flex items-center mb-8 last:mb-0">
          <div className="w-10 h-10 rounded-full flex items-center justify-center z-10 border-4 border-primary bg-white ring-2 ring-primary ring-offset-2">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div className="ml-4 flex-grow">
            <div className="text-sm font-medium">{current_route?.to_location?.name}</div>
            <div className="text-xs text-muted-foreground mt-1">
              ETA: {convertTime(current_route?.no_of_kms)} 
            </div>
          </div>
        </div>
      </div>

      {/* BUTTON - OPEN MODAL */}
      <div className="flex justify-center items-center m-16">
        <button
          className="bg-[#062D51] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#084075] transition duration-300"
          onClick={handleOpenModal}
        >
          Set this Route as your Main
        </button>
      </div>

      {/* MODAL (POPUP) */}
      <Dialog open={open} onClose={handleCloseModal} maxWidth="sm" fullWidth>
        <DialogTitle>Confirm Route Selection</DialogTitle>
        <DialogContent>
          <p><strong>Route ID:</strong> {current_route?.route_id}</p>
          <p><strong>From:</strong> {current_route?.from_location?.name}</p>
          <p><strong>To:</strong> {current_route?.to_location?.name}</p>
          <p><strong>Total Distance:</strong> {current_route?.no_of_kms} km</p>
          <p><strong>Estimated Time:</strong> {((current_route?.no_of_kms * 0.75) / 60).toFixed(2)} hrs</p>

          {/* VEHICLE SELECTION */}
          <FormControl component="fieldset" style={{ marginTop: "20px" }}>
            <FormLabel component="legend">Select a Vehicle</FormLabel>
            <RadioGroup value={selectedVehicle} onChange={(e) => setSelectedVehicle(e.target.value)}>
              {driverData?.vehicleId?.map((vehicle) => (
                <FormControlLabel key={vehicle?.reg_no} value={vehicle?.reg_no} control={<Radio />} label={vehicle?.reg_no} />
              ))}
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">Cancel</Button>
          <Button onClick={handleConfirmRoute} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default RouteTracking;
