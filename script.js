// Keyword Difficulty Checker (simulated logic)
function checkKeywordDifficulty() {
  const keyword = document.getElementById("keywordInput").value;
  if (!keyword) {
    return alert("Please enter a keyword.");
  }
  const difficulty = Math.floor(Math.random() * 100);
  document.getElementById("keywordResult").innerText =
    `Difficulty score for "${keyword}": ${difficulty}/100`;
}

// Backlink Analyzer (simulated logic)
function analyzeBacklinks() {
  const url = document.getElementById("backlinkInput").value;
  if (!url) {
    return alert("Enter a URL.");
  }
  document.getElementById("backlinkResult").innerText =
    `Found 12 backlinks to ${url} (example data only).`;
}

// Meta & SERP Preview
function generateSERPPreview() {
  const title = document.getElementById("metaTitle").value;
  const desc = document.getElementById("metaDescription").value;
  const preview = `
    <div style="border:1px solid #ccc; padding:10px; margin-top:10px;">
      <p style="color:#1a0dab; font-size:18px;">${title}</p>
      <p style="color:#006621;">www.yoursite.com</p>
      <p>${desc}</p>
    </div>
  `;
  document.getElementById("serpPreview").innerHTML = preview;
}

// Plagiarism Checker (basic word overlap detection)
function checkPlagiarism() {
  const content = document.getElementById("plagiarismInput").value.trim();
  if (!content) {
    return alert("Paste content to check.");
  }

  const sampleSources = [
    "AI is transforming the future of content writing.",
    "Search engine optimization is essential for web visibility.",
    "Effective keyword strategy helps increase organic traffic."
  ];

  let score = 0;
  sampleSources.forEach(source => {
    const words = source.split(" ");
    words.forEach(word => {
      if (content.includes(word)) score++;
    });
  });

  const percentage = Math.min(100, Math.floor((score / content.split(" ").length) * 100));
  document.getElementById("plagiarismResult").innerText =
    `Estimated similarity with existing content: ${percentage}%`;
}

const keywordSuggestions = [
  "SEO tools", "keyword research", "backlink checker", "on-page SEO", "meta description", 
  "plagiarism checker", "content optimization", "Google ranking", "SERP preview", "domain authority"
];

const keywordInput = document.getElementById("keywordInput");
const suggestionBox = document.createElement("div");
suggestionBox.className = "suggestion-box";
keywordInput.parentNode.appendChild(suggestionBox);

keywordInput.addEventListener("input", function () {
  const input = this.value.toLowerCase();
  suggestionBox.innerHTML = "";

  if (input.length === 0) return;

  const matches = keywordSuggestions.filter(keyword =>
    keyword.toLowerCase().includes(input)
  );

  matches.forEach(keyword => {
    const div = document.createElement("div");
    div.innerText = keyword;
    div.onclick = () => {
      keywordInput.value = keyword;
      suggestionBox.innerHTML = "";
    };
    suggestionBox.appendChild(div);
  });
});
async function downloadKeywordReport() {
  const resultText = document.getElementById("keywordResult").innerText;
  if (!resultText) {
    alert("Please check a keyword first.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Keyword Difficulty Report", 20, 20);
  doc.setFontSize(12);
  doc.text(resultText, 20, 40);

  doc.save("keyword_difficulty_report.pdf");
}
const metaTitleInput = document.getElementById("metaTitle");
const metaDescriptionInput = document.getElementById("metaDescription");
const serpTitle = document.getElementById("serpTitle");
const serpDescription = document.getElementById("serpDescription");
const titleCounter = document.getElementById("titleCounter");
const descCounter = document.getElementById("descCounter");

function getPixelWidth(text, fontSize = 18) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.font = `${fontSize}px Arial`;
  return ctx.measureText(text).width;
}

metaTitleInput.addEventListener("input", () => {
  serpTitle.innerText = metaTitleInput.value || "Example Title";
  const charCount = metaTitleInput.value.length;
  const pixelWidth = getPixelWidth(metaTitleInput.value, 18).toFixed(0);
  titleCounter.innerText = `${charCount} characters • ${pixelWidth} pixels`;
});

metaDescriptionInput.addEventListener("input", () => {
  serpDescription.innerText = metaDescriptionInput.value || "Example meta description";
  const charCount = metaDescriptionInput.value.length;
  const pixelWidth = getPixelWidth(metaDescriptionInput.value, 13).toFixed(0);
  descCounter.innerText = `${charCount} characters • ${pixelWidth} pixels`;
});


