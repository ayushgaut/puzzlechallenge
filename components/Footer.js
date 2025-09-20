export default function Footer() {
    return (
        <footer
            style={{
                marginTop: "40px",
                padding: "20px",
                backgroundColor: "#f1f1f1",
                textAlign: "center",
            }}
        >
            <p>© 2025 Puzzle Challenge</p>
            <div style={{ marginTop: "10px" }}>
                {/* Social Media Icons (placeholders) */}
                <a href="#" style={{ margin: "0 10px" }}>LinkedIn</a>
                <a href="#" style={{ margin: "0 10px" }}>Meta</a>
                <a href="#" style={{ margin: "0 10px" }}>Instagram</a>
                <a href="#" style={{ margin: "0 10px" }}>Twitter/X</a>
                <a href="#" style={{ margin: "0 10px" }}>TikTok</a>
                <a href="#" style={{ margin: "0 10px" }}>YouTube</a>
            </div>
        </footer>
    );
}
