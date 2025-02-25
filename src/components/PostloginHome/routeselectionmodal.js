import React, { useState, useEffect } from 'react';
import { Modal, Box, FormControlLabel, Checkbox, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updatedriver } from '../../api/driver';
import { updatevehicle } from '../../api/vehicle';

const RouteSelectionModal = ({ open, handleClose, routes, onSave, initialSelectedRoute, vehicleid, driver = null }) => {
  const [selectedRoute, setSelectedRoute] = useState(initialSelectedRoute);
  const dispatch = useDispatch();

  useEffect(() => {
    if (open) {
      setSelectedRoute(initialSelectedRoute);
    }
  }, [open, initialSelectedRoute]);

  const handleCheckboxChange = (routeId) => {
    setSelectedRoute(routeId === selectedRoute ? null : routeId); 
  };

  const handleSave = async () => {
    const data = { route_id: selectedRoute };

    if (driver) {
      console.log("here we gooo",driver)
      await dispatch(updatedriver(data,driver));
    }
    if (vehicleid) {
      await dispatch(updatevehicle(data,vehicleid));
    }
    
    handleClose(); 
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        className="bg-white rounded-md p-4 max-w-sm mx-auto mt-20"
        style={{ position: 'relative' }}
      >
        <h2 className="text-xl mb-4">Select Route</h2>
        <div className="max-h-60 overflow-y-auto mb-4">
          {routes?.map((route) => (
            <FormControlLabel
              key={route._id}
              control={
                <Checkbox
                  checked={selectedRoute === route?._id}
                  onChange={() => handleCheckboxChange(route?._id)}
                  color="primary"
                />
              }
              label={route.name}
            />
          ))}
        </div>
        <div className="flex justify-end space-x-2">
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default RouteSelectionModal;