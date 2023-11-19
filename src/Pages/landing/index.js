import NewUser from '../PopUpPages/newUserModal';
import React, { useState } from 'react'

import Destinations from "./destinations";
import AboutUs from './aboutUs';

import Authentication from '../PopUpPages/Authentication';
import FellowTravelers from './FellowTravelers';
import ScrollToTop from '../../components/shared/UI/ScrollToTop/ScrollToTop';


const LandingMain = (props) => {

const [showAuthenticationForm, setShowAuthenticationForm] = useState(false);

return (
<div>

{
props.extra &&
<NewUser />
}

<Destinations/>
<FellowTravelers />
<AboutUs />

{
showAuthenticationForm &&
<Authentication 
signup 
show 
onClose={()=>setShowAuthenticationForm(false)}
/>
}
<div>   
<ScrollToTop/>
</div>

</div>
)
}

export default LandingMain