import { Grid, Typography, Button } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Grid className="bg-black text-white text-center mt-15" container sx={{ bgcolor: "black", color: "white", py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" varient='h6'>
                        Company
                    </Typography>
                    <div>
                        <Button className="pb-5 " varient='h6' gutterBottom>
                            About
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" varient='h6' gutterBottom>
                            Contact
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" varient='h6' gutterBottom>
                            Privacy
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" varient='h6' gutterBottom>
                            Terms
                        </Button>
                    </div>



                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" varient='h6'>
                        Solutions
                    </Typography>
                    <div>
                        <Button className="pb-5" varient='h6' gutterBottom>
                            Marketing
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" varient='h6' gutterBottom>
                            Analytics
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" varient='h6' gutterBottom>
                            Commerce
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" varient='h6' gutterBottom>
                            Support
                        </Button>
                    </div>



                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" varient='h6'>
                        Documentation
                    </Typography>
                    <div>
                        <Button className="pb-5" varient='h6' gutterBottom>
                            About
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" varient='h6' gutterBottom>
                            Contact
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" varient='h6' gutterBottom>
                            Privacy
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" varient='h6' gutterBottom>
                            Terms
                        </Button>
                    </div>



                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" varient='h6'>
                        Legal
                    </Typography>
                    <div>
                        <Button className="pb-5" varient='h6' gutterBottom>
                            About
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" varient='h6' gutterBottom>
                            Contact
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" varient='h6' gutterBottom>
                            Privacy
                        </Button>
                    </div>
                    <div>
                        <Button className="pb-5" varient='h6' gutterBottom>
                            Terms
                        </Button>
                    </div>



                </Grid>

                <Grid className='pt-20' item xs={12}>
                    <Typography variant="body2" component="p" align="center">
                        &copy; 2023 MyCompany. All right reserved.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Made with <span className="text-red-500">❤️</span> by MyCompany.
                    </Typography>

                </Grid>
            </Grid>

        </div>
    )
}

export default Footer