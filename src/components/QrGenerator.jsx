import { useState } from "react";
import { Button, Container, Stack, TextField, Typography, Card, CardContent, Box } from "@mui/material"
import QRCode from "react-qr-code";

export default function QrGenerator() {
    const [contactInfo, setContactInfo] = useState({
        fullName: "",
        jobTitle: "",
        company: "",
        email: "",
        phone: "",
        website: "",
        linkedin: "",
        notes: ""
    });

    const [qrUrl, setQrUrl] = useState("");
    const [showPreview, setShowPreview] = useState(false);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setContactInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    function generateQrCode(e) {
        e.preventDefault();

        //encoding the data for presentation purpose
        const encodedData = encodeURIComponent(JSON.stringify(contactInfo));
        const url = `https://yourwebsite.com/contact?data=${encodedData}`;

        setQrUrl(url);
        setShowPreview(true);
    }

    return (
        <Container maxWidth="md" sx={{ py: 4 }} >
            <Typography variant="h4" component="h1" gutterBottom align="center" >
                Contact Card QR Generator
            </Typography>

            <Box sx={{ mb: 4}}>
                <form onSubmit={generateQrCode}>
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Personal Information
                            </Typography>
                            <Stack spacing={2}>
                                <TextField
                                 id="fullName"
                                 label="Full Name"
                                 variant="outlined"
                                 name="fullName"
                                 value={contactInfo.fullName}
                                 onChange={handleInputChange}
                                 fullWidth
                                 required
                                />
                                <TextField
                                 id="jobTitle"
                                 label="Job Title"
                                 variant="outlined"
                                 name="jobTitle"
                                 value={contactInfo.jobTitle}
                                 onChange={handleInputChange}
                                 fullWidth
                                />
                                <TextField
                                 id="company"
                                 label="Company"
                                 variant="outlined"
                                 name="company"
                                 value={contactInfo.company}
                                 onChange={handleInputChange}
                                 fullWidth
                                />
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card variant="outlined" sx={{mb:3}}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Contact Information
                            </Typography>
                            <Stack spacing={2}>
                                <TextField
                                    id="email"
                                    label="Email"
                                    variant="outlined"
                                    name="email"
                                    value={contactInfo.email}
                                    onChange={handleInputChange}
                                    fullWidth
                                    required
                                    type="email"
                                />
                                <TextField
                                    id="phone"
                                    label="Phone"
                                    variant="outlined"
                                    name="phone"
                                    value={contactInfo.phone}
                                    onChange={handleInputChange}
                                    fullWidth
                                />
                                <TextField
                                    id="website"
                                    label="Website"
                                    variant="outlined"
                                    name="website"
                                    value={contactInfo.website}
                                    onChange={handleInputChange}
                                    fullWidth
                                />
                                <TextField
                                    id="linkedin"
                                    label="Linkedin URL"
                                    variant="outlined"
                                    name="linkedin"
                                    value={contactInfo.linkedin}
                                    onChange={handleInputChange}
                                    fullWidth
                                />
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card variant="outlined" sx={{ mb: 4 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom >
                                Additional Information
                            </Typography>
                            <TextField
                                id="notes"
                                label="Notes"
                                variant="outlined"
                                name="notes"
                                value={contactInfo.notes}
                                onChange={handleInputChange}
                                fullWidth
                                multiline
                                rows={3}
                            />
                        </CardContent>
                    </Card>

                    <Button 
                        variant="contained"
                        type="submit"
                        fullWidth
                        size="large"
                        sx={{ mb: 4 }}
                    >
                        Generate QR Code
                    </Button>
                </form>
            </Box>

            {showPreview && (
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h5" gutterBottom>
                        Your QR Code
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                        Scan this Code to view contact Information
                    </Typography>

                    <Card sx={{
                        display: "inline-block",
                        p:3,
                        mb: 3,
                        boxShadow: 3
                    }}>
                        <QRCode
                            value={qrUrl}
                            size={256}
                            style={{ height: "auto", maxWidth: "100%", width: "100%"}}
                        />
                    </Card>

                    <Box>
                        <Button
                            variant="outlined"
                            onClick={() => window.print()}
                            sx={{ mr: 2 }}
                        >
                            Print QR COde
                        </Button>
                        <Button
                            variant="text"
                            onClick={() => {
                                //implement download functionality
                                alert("Download functionality implemented here")
                            }}
                        >
                            Download as Image
                        </Button>
                    </Box>
                </Box>
            )}
        </Container>
    )
}