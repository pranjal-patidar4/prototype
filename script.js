
const players = [
    {
        
       name: "Virat Kohli",
       matches: 254,
       runs: 37364,
       balls: 42882,
       average: 54.73,
       bowlingWickets: 4,
       economy: 8.05,
       bowlingAverage: 166.25

    },
    {
        name: "RG Sharma",
        matches: 265,
        runs: 27206,
        balls: 28868
    },
    {
        name: "DA Warner",
        matches: 220,
        runs: 28573,
        balls: 29705
    },
    {
        name: "JE Root",
        matches: 260,
        runs: 27299,
        balls: 39648
    },
    {
        name: "AB de Villiers",
        matches: 228,
        runs: 26370,
        balls: 30477
    }
];
const teams = [
    {
        name: "India",
        matches: 120,
        wins: 78,
        losses: 35,
        winPercentage: 65,
        recentForm: "W W L W W"
    },
    {
        name: "Australia",
        matches: 115,
        wins: 72,
        losses: 38,
        winPercentage: 63,
        recentForm: "W L W W L"
    }
];
function searchPlayer() {
    const searchText = document.getElementById("playerSearch").value.toLowerCase();

    const player = players.find(
        p => p.name.toLowerCase().includes(searchText)
    )       

    const result = document.getElementById("playerResult");
    if (player) {
    result.innerHTML = `
        <h2>${player.name}</h2>

        <div class="stat-box">
            <strong>${player.matches}</strong>
            <span>Matches</span>
        </div>

        <div class="stat-box">
            <strong>${player.runs}</strong>
            <span>Runs</span>
        </div>

        <div class="stat-box">
            <strong>${player.balls}</strong>
            <span>Balls</span>
        </div>

        <div class="stat-box">
            <strong>${player.average}</strong>
            <span>Average</span>
        </div>

        <div class="stat-box">
            <strong>${((player.runs / player.balls) * 100).toFixed(2)}</strong>
            <span>Strike Rate</span>
        </div>

        <div class="stat-box">
            <strong>${player.bowlingWickets}</strong>
            <span>Wickets</span>
        </div>

        <div class="stat-box">
            <strong>${player.economy}</strong>
            <span>Economy</span>
        </div>

        <div class="stat-box">
            <strong>${player.bowlingAverage}</strong>
            <span>Bowling Average</span>
        </div>
    `;
    
    } else {
        result.innerHTML = `
            <h2>Player not found</h2>
            <p>Please enter a valid player name.</p>
        `;
    }
}
function showLeaderboard() {
    const content = document.getElementById("content");

    let html = "<h2>🏆 Top Players</h2>";

    players.forEach((player, index) => {
        html += `
            <div class="leaderboard-item">
                <strong>${index + 1}. ${player.name}</strong>
                <p>Runs: ${player.runs} | Balls: ${player.balls}</p>
            </div>
        `;
    });

    content.innerHTML = html;
}

 

function showTeams() {
    const content = document.getElementById("content");

    let html = "<h2>🏏 Team Analysis</h2>";

    teams.forEach(team => {
        html += `
            <div class="team-card">
                <h3>🏏 ${team.name}</h3>
                <p>Matches: ${team.matches}</p>
                <p>Wins: ${team.wins}</p>
                <p>Losses: ${team.losses}</p>
                <p>Win Percentage: ${team.winPercentage}%</p>
                <p>Recent Form: ${team.recentForm}</p>
            </div>
        `;
    });

    content.innerHTML = html;
}