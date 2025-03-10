import { useState, useRef, useEffect } from "react"
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateUserMutation } from "../slices/usersApiSlice";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { saveDeliveryAddress, savePhoneNumber } from "../slices/cartSlice";
import CheckoutSteps from "../components/CheckoutSteps";
import { toast } from 'react-toastify';
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { useJsApiLoader, StandaloneSearchBox } from "@react-google-maps/api";

const libraries = ["places"]

const DeliveryScreen = () => {

    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY, 
        libraries,
    });

    const cart = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.auth)
    const { deliveryAddress, phoneNumber } = cart; 
    const [address, setAddress] = useState(deliveryAddress?.address || '');
    const [longitude, setLongitude] = useState(deliveryAddress?.longitude || '');
    const [latitude, setLatitude] = useState(deliveryAddress?.latitude || ''); 


    const [phone, setPhone] = useState(phoneNumber || userInfo?.phoneNumber || '');

    const navigate = useNavigate();
    const dispatch = useDispatch()



    const searchBoxRef = useRef(null);

    const onPlacesChanged = async () => {
        const places = searchBoxRef.current.getPlaces();
        const place = places[0];
        if (place) {
            const geocode = await getGeocode({ address: place.formatted_address });
            const { lat, lng } = getLatLng(geocode[0]);
    
            setAddress(place.formatted_address);
            setLongitude(lng); // Set longitude first
            setLatitude(lat); // before setting lat as 2nd

        }
    };
    



    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            // // Update the user's phone number in the database
            // await updateUser({
            //     userId: userInfo._id, // Assuming userInfo is available from Redux
            //     phoneNumber: phoneNumber,
            // }).unwrap();

            // Save delivery address and phone number to Redux
            dispatch(saveDeliveryAddress({
                address,
                longitude,
                latitude,
            }));
            dispatch(savePhoneNumber(phone));

            toast.success('Phone number updated successfully');
            navigate('/placeorder');
        } catch (err) {
            toast.error(err?.data?.message || 'Failed to update phone number');
        }
    };

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

  return (
    <FormContainer>
    <CheckoutSteps step1 step2 />
    <h1>Delivery</h1>
    <Form onSubmit={submitHandler}>
        <Form.Group controlId="address" className="my-2">
            <Form.Label>Address</Form.Label>
            <StandaloneSearchBox
                onLoad={ref => searchBoxRef.current = ref}
                onPlacesChanged={onPlacesChanged}
            >
                <Form.Control
                    type="text"
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </StandaloneSearchBox>
        </Form.Group>

        <Form.Group controlId="phoneNumber" className="my-2">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
                type="number"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="my-2">
            Continue
        </Button>
    </Form>
</FormContainer>

)
}

export default DeliveryScreen