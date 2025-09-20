import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function ThankYou() {
    return (
        <>
            <NavBar />
            <main className="p-12 text-center">
                <h1 className="text-3xl font-bold text-green-600">
                    Your entry has been recorded.
                </h1>
                <p className="mt-4">Good luck in the contest!</p>
            </main>
            <Footer />
        </>
    );
}
