import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Box, Button } from "@mui/material";
import ContactCard from "./ContactCard";

export default function ContactViewer() {
    const [contactInfo, setContactInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {

        //extracting directly from url query param
        const queryParams = new URLSearchParams(location.search);
        const data = queryParams.get('data');

        if(data) {
            try {
                const decodedData = JSON.parse(decodeURIComponent(data));
                setContactInfo(decodedData);
            } catch (error) {
                console.error("Failed to parse contact data", error);
            }
        }

        setLoading(false);
    }, [location]);

    const handleAddToContacts = () => {
        //implement functionality to download as vCard
        alert("This would add contact to your phone")
    };

    if (loading) {
        return (
            <Container>
                <Typography>Loading Contact Information... </Typography>
            </Container>
        );
    }

    if (!contactInfo) {
        return (
            <Container>
                <Typography>No contact Information found</Typography>
            </Container>
        );
    }

    return (
        <Container maxWidth="sm" sx={{ py: 4 }}>
            <ContactCard contactInfo={contactInfo} /> 
            <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
                <Button
                    variant="contained"
                    size="large"
                    onClick={handleAddToContacts}
                >
                    Add to Contacts
                </Button>
            </Box>
        </Container>
    );
}