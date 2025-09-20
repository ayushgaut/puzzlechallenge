import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Rules() {
    return (
        <>
            <NavBar />
            <main className="p-8 max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Contest Rules</h1>
                <p className="mb-4">Judging Formula:</p>
                <ul className="list-disc list-inside mb-6">
                    <li>AI Scoring: 1/3</li>
                    <li>Expert Review: 1/3</li>
                    <li>Community Voting: 1/3</li>
                </ul>
                <p className="text-sm text-gray-700">
                    This is a skill-based contest. No element of chance or lottery is
                    involved. Use of AI tools is at your own risk. Random sample checks
                    may occur. Confirmed AI use may lead to disqualification and reversal
                    of winnings. By participating, you confirm you are not and will not be
                    using AI for this contest.
                </p>
            </main>
            <Footer />
        </>
    );
}
