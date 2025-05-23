import { render, screen } from "@testing-library/react"

import { BrowserRouter } from "react-router-dom";
import { benutzerArray } from "../../data/artikel.data";
import BenutzerInfo from "../../components/Benutzer/BenutzerInfo";

let user = benutzerArray[0];
describe('ArtikelKnopfe Test', () => {
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