import { Typography, Card, CardContent, Box, Divider } from "@mui/material";
import { Email, Phone, Language, LinkedIn, Note } from "@mui/icons-material";

export default function ContactCard({ contactInfo }) {
    return (
        <Card sx={{ 
            width: 300, 
            height: 600,
            mx: 'auto',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
            position: 'relative',
            pb: 4
        }}>
            
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                border: '10px solid #222',
                borderRadius: '24px',
                pointerEvents: 'none',
                zIndex: 10
            }}>

                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '120px',
                    height: '25px',
                    backgroundColor: '#222',
                    borderBottomLeftRadius: '12px',
                    borderBottomRightRadius: '12px'
                }} />
                
                
                <Box sx={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '5px',
                    backgroundColor: '#222',
                    borderRadius: '3px'
                }} />
            </Box>
            
            
            <Box sx={{
                bgcolor: "#f5f5f5",
                color: "#424242",
                py: 4,
                px: 2,
                textAlign: "center",
                mt: 4 
            }}>
                <Typography variant="h6" component="h1" sx={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                    {contactInfo.fullName || "Your Name"}
                </Typography>
                {contactInfo.jobTitle && (
                    <Typography variant="subtitle2" sx={{ fontSize: '0.8rem' }}>
                        {contactInfo.jobTitle}
                    </Typography>
                )}
                {contactInfo.company && (
                    <Typography variant="subtitle2" sx={{ fontSize: '0.75rem', opacity: 0.9 }}>
                        {contactInfo.company}
                    </Typography>
                )}
            </Box>
            
            <CardContent sx={{ px: 2, py: 2 }}>
                <Box sx={{ mb: 2 }}>
                    {contactInfo.email && (
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                            <Email sx={{ mr: 1.5, color: "primary.main", fontSize: '0.9rem' }} />
                            <Typography sx={{ fontSize: '0.8rem' }}>
                                <a href={`mailto:${contactInfo.email}`} style={{ textDecoration: 'none', color: '#555' }}>
                                    {contactInfo.email}
                                </a>
                            </Typography>
                        </Box>
                    )}
                    
                    {contactInfo.phone && (
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                            <Phone sx={{ mr: 1.5, color: "primary.main", fontSize: '0.9rem' }} />
                            <Typography sx={{ fontSize: '0.8rem' }}>
                                <a href={`tel:${contactInfo.phone}`} style={{ textDecoration: 'none', color: '#555' }}>
                                    {contactInfo.phone}
                                </a>
                            </Typography>
                        </Box>
                    )}
                    
                    {contactInfo.website && (
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                            <Language sx={{ mr: 1.5, color: "primary.main", fontSize: '0.9rem' }} />
                            <Typography sx={{ fontSize: '0.8rem' }}>
                                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#555' }}>
                                    {contactInfo.website.replace(/^https?:\/\//, '').substring(0, 20)}
                                    {contactInfo.website.replace(/^https?:\/\//, '').length > 20 ? '...' : ''}
                                </a>
                            </Typography>
                        </Box>
                    )}
                    
                    {contactInfo.linkedin && (
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                            <LinkedIn sx={{ mr: 1.5, color: "primary.main", fontSize: '0.9rem' }} />
                            <Typography sx={{ fontSize: '0.8rem' }}>
                                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#555' }}>
                                    LinkedIn Profile
                                </a>
                            </Typography>
                        </Box>
                    )}
                </Box>
                
                {contactInfo.notes && (
                    <>
                        <Divider sx={{ mb: 1.5 }} />
                        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                            <Note sx={{ mr: 1.5, mt: 0.3, color: "primary.main", fontSize: '0.9rem' }} />
                            <Typography sx={{ fontSize: '0.75rem', color: '#555' }}>
                                {contactInfo.notes.length > 100 
                                    ? contactInfo.notes.substring(0, 100) + '...' 
                                    : contactInfo.notes}
                            </Typography>
                        </Box>
                    </>
                )}
            </CardContent>
        </Card>
    );
}