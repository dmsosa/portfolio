import { render, screen } from "@testing-library/react"
import { benutzerArray } from "../data/artikel.data"
import BenutzerInfo from "../components/Benutzer/BenutzerInfo";
import Avatar from "../components/Widgets/Avatar";

import { BrowserRouter } from "react-router-dom";

let user = benutzerArray[0];
describe('Avatar testen', () => {
    it('sollte gestreckt sein', () => {
        render(
        
        <BrowserRouter>
            <BenutzerInfo benutzer={user} />
        </BrowserRouter>
        )
        expect(screen.getByText('Follow: ')).toBeInTheDocument();
    })
    it('should', () => {
        
    })
})