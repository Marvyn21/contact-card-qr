import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Container, Typography, Card, CardContent, Box, Button, Divider } from "@mui/material";
import { Email, Phone, Language, LinkedIn, Note } from "@mui/icons-material";

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

    return  (
        <Container maxWidth="sm" sx={{ py: 4 }}>
            <Card variant="outlined" sx={{ mb: 4, overflow: "visible"}}>
                <Box sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    py: 3,
                    px: 2,
                    textAlign: "center"
                }}>
                    <Typography variant="h4" component="h1" >
                        {contactInfo.fullName}
                    </Typography>
                    {contactInfo.jobTitle && (
                        <Typography variant="subtitle1">
                            {contactInfo.jobTitle}
                        </Typography>
                    )}
                    {contactInfo.company && (
                        <Typography variant="subtitle2">
                            {contactInfo.company}
                        </Typography>
                    )}
                </Box>

                <CardContent sx={{ px: 3, py: 4 }}>
                    <Box sx={{ mb: 3 }}>
                        {contactInfo.email && (
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2}}>
                                <Email sx={{mr: 2, color: "primary.main" }} /> 
                                <Typography>
                                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                                </Typography>
                            </Box>
                        )}

                        {contactInfo.phone && (
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2}}>
                                <Phone sx={{mr: 2, color: "primary.main" }} /> 
                                <Typography>
                                    <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                                </Typography>
                            </Box>
                        )}

                        {contactInfo.website && (
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2}}>
                                <Language sx={{mr: 2, color: "primary.main" }} /> 
                                <Typography>
                                    <a href={contactInfo.website} target="_blank" rel="noopener noreferrer">
                                        {contactInfo.website.replace(/^https?:\/\//, '')}
                                    </a>
                                </Typography>
                            </Box>
                        )}

                        {contactInfo.linkedin && (
                            <Box sx={{ display: "flex", alignItems: "center", mb: 2}}>
                                <LinkedIn sx={{ mr: 2, color: "primary.main" }} />
                                <Typography>
                                    <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                                        LinkedIn Profile
                                    </a>
                                </Typography>
                            </Box>
                        )}
                    </Box>

                    {contactInfo.notes && (
                        <>
                            <Divider sx={{mb: 3}} />
                            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2}}>
                                <Note sx={{ mr: 2, mt: 0.5, color: "primary.main" }} />
                                <Typography>{contactInfo.notes}</Typography>
                            </Box>
                        </>
                    )}

                    <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={handleAddToContacts}
                        >
                            Add to Contacts
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}