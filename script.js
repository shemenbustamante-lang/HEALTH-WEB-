// Habits Quiz Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle quiz submission
    const quizForm = document.getElementById('habitsQuiz');
    if (quizForm) {
        quizForm.addEventListener('submit', function(e) {
            e.preventDefault();
            calculateHabitsScore();
        });
    }

    // Load saved challenge progress
    loadChallengeProgress();
    
    // Load saved checklist states
    loadChecklistStates();
});

// Calculate habits quiz score
function calculateHabitsScore() {
    const form = document.getElementById('habitsQuiz');
    const formData = new FormData(form);
    let totalScore = 0;
    let questionCount = 0;

    // Calculate total score
    for (let i = 1; i <= 10; i++) {
        const answer = formData.get(`q${i}`);
        if (answer) {
            totalScore += parseInt(answer);
            questionCount++;
        }
    }

    if (questionCount < 10) {
        alert('Please answer all questions before submitting.');
        return;
    }

    // Hide quiz, show results
    document.querySelector('.quiz-container').style.display = 'none';
    document.getElementById('results').style.display = 'block';

    // Display score
    document.getElementById('scoreText').textContent = totalScore;

    // Determine category and recommendations
    let category, description, badge, recommendations;

    if (totalScore >= 45) {
        category = "Excellent! 🌟";
        description = "You have outstanding eating habits! You're making great choices for your health. Keep up the excellent work!";
        badge = "🏆 Health Champion";
        recommendations = [
            "Continue your healthy eating patterns",
            "Share your healthy habits with friends",
            "Try new healthy recipes to keep it exciting",
            "Stay consistent with your good choices"
        ];
    } else if (totalScore >= 35) {
        category = "Very Good! 👍";
        description = "You're doing great with your eating habits! You have a solid foundation. A few small improvements can make you even healthier.";
        badge = "⭐ Health Star";
        recommendations = [
            "Try to be more consistent with breakfast",
            "Increase your water intake slightly",
            "Add more vegetables to your meals",
            "Reduce junk food frequency a bit more"
        ];
    } else if (totalScore >= 25) {
        category = "Good Start! 🌱";
        description = "You're on the right track! You have some healthy habits, but there's room for improvement. Small changes can make a big difference.";
        badge = "🌿 Growing Healthy";
        recommendations = [
            "Start eating breakfast every day",
            "Increase your fruit and vegetable intake",
            "Drink more water throughout the day",
            "Reduce processed foods and sugary drinks",
            "Try not to skip meals"
        ];
    } else {
        category = "Needs Improvement 💪";
        description = "Your eating habits need some work, but don't worry! Every journey starts with a single step. You can do this!";
        badge = "🌟 Health Beginner";
        recommendations = [
            "Start with eating breakfast every day",
            "Drink at least 6-8 glasses of water daily",
            "Add at least one fruit or vegetable to each meal",
            "Cut down on junk food to 2-3 times per week maximum",
            "Set reminders for regular meal times",
            "Plan your meals in advance",
            "Visit our 'What Should I Eat?' page for meal ideas"
        ];
    }

    document.getElementById('scoreCategory').textContent = category;
    document.getElementById('scoreDescription').innerHTML = `<p>${description}</p>`;
    document.getElementById('badgeDisplay').innerHTML = `<div style="font-size: 3rem;">${badge}</div>`;

    const recList = document.getElementById('recommendationsList');
    recList.innerHTML = '';
    recommendations.forEach(rec => {
        const li = document.createElement('li');
        li.textContent = rec;
        recList.appendChild(li);
    });

    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

// Challenge progress tracking
const challengeData = {
    mainChallenge: { completed: 0, total: 7 },
    water: { completed: 0, total: 7 },
    soda: { completed: 0, total: 7 },
    breakfast: { completed: 0, total: 7 },
    veggie: { completed: 0, total: 7 },
    junk: { completed: 0, total: 3 },
    color: { completed: 0, total: 7 },
    snack: { completed: false },
    cook: { completed: false }
};

// Load challenge progress from localStorage
function loadChallengeProgress() {
    const saved = localStorage.getItem('challengeProgress');
    if (saved) {
        const savedData = JSON.parse(saved);
        Object.assign(challengeData, savedData);
        updateAllProgressBars();
    }
}

// Save challenge progress to localStorage
function saveChallengeProgress() {
    localStorage.setItem('challengeProgress', JSON.stringify(challengeData));
}

// Mark a day as complete for a challenge
function markDayComplete(challengeName) {
    if (challengeData[challengeName] && challengeData[challengeName].completed < challengeData[challengeName].total) {
        challengeData[challengeName].completed++;
        saveChallengeProgress();
        updateProgressBar(challengeName);
        
        // Check if challenge is complete
        if (challengeData[challengeName].completed === challengeData[challengeName].total) {
            showBadge(challengeName);
            addBadgeToCollection(challengeName);
        }
    }
}

// Update progress bar for a specific challenge
function updateProgressBar(challengeName) {
    const data = challengeData[challengeName];
    if (!data) return;

    const percentage = (data.completed / data.total) * 100;
    
    // Update main challenge
    if (challengeName === 'mainChallenge') {
        const progressBar = document.getElementById('mainChallengeProgress');
        const daysText = document.getElementById('mainDaysCompleted');
        if (progressBar) progressBar.style.width = percentage + '%';
        if (daysText) daysText.textContent = data.completed;
    }
    
    // Update specific challenge progress bars
    const progressBar = document.getElementById(`${challengeName}Progress`);
    const daysText = document.getElementById(`${challengeName}Days`);
    
    if (progressBar) {
        progressBar.style.width = percentage + '%';
    }
    if (daysText) {
        daysText.textContent = data.completed;
    }
}

// Update all progress bars
function updateAllProgressBars() {
    Object.keys(challengeData).forEach(challengeName => {
        if (challengeData[challengeName].completed !== undefined && challengeData[challengeName].total !== undefined) {
            updateProgressBar(challengeName);
        }
        
        // Show badges for completed challenges
        if (challengeData[challengeName].completed === challengeData[challengeName].total) {
            const badge = document.getElementById(`${challengeName}Badge`);
            if (badge) badge.style.display = 'block';
        }
        
        // Show one-time challenge badges
        if (challengeName === 'snack' && challengeData[challengeName].completed) {
            const badge = document.getElementById('snackBadge');
            if (badge) badge.style.display = 'block';
        }
        if (challengeName === 'cook' && challengeData[challengeName].completed) {
            const badge = document.getElementById('cookBadge');
            if (badge) badge.style.display = 'block';
        }
    });
    
    updateBadgeCollection();
}

// Show badge for completed challenge
function showBadge(challengeName) {
    const badge = document.getElementById(`${challengeName}Badge`);
    if (badge) {
        badge.style.display = 'block';
    }
}

// Complete one-time challenges
function completeSnackChallenge() {
    challengeData.snack.completed = true;
    saveChallengeProgress();
    showBadge('snack');
    addBadgeToCollection('snack');
}

function completeCookingChallenge() {
    challengeData.cook.completed = true;
    saveChallengeProgress();
    showBadge('cook');
    addBadgeToCollection('cook');
}

// Badge collection management
const badgeInfo = {
    mainChallenge: { icon: '🍎', name: 'Fruit Master' },
    water: { icon: '💧', name: 'Hydration Hero' },
    soda: { icon: '🥤', name: 'Sugar Slayer' },
    breakfast: { icon: '🍳', name: 'Morning Champion' },
    veggie: { icon: '🥗', name: 'Veggie Lover' },
    junk: { icon: '🚫', name: 'Clean Eater' },
    color: { icon: '🌈', name: 'Rainbow Eater' },
    snack: { icon: '🥕', name: 'Snack Explorer' },
    cook: { icon: '🍜', name: 'Home Chef' }
};

function addBadgeToCollection(challengeName) {
    const badge = badgeInfo[challengeName];
    if (!badge) return;
    
    const collection = document.getElementById('badgeCollection');
    if (!collection) return;
    
    // Remove empty badge message if it exists
    const emptyBadge = collection.querySelector('.empty-badge');
    if (emptyBadge) {
        emptyBadge.remove();
    }
    
    // Check if badge already exists
    if (collection.querySelector(`[data-badge="${challengeName}"]`)) {
        return;
    }
    
    // Add new badge
    const badgeElement = document.createElement('div');
    badgeElement.className = 'earned-badge';
    badgeElement.setAttribute('data-badge', challengeName);
    badgeElement.innerHTML = `
        <span class="badge-icon">${badge.icon}</span>
        <strong>${badge.name}</strong>
    `;
    collection.appendChild(badgeElement);
    
    saveBadgeCollection();
}

function updateBadgeCollection() {
    const collection = document.getElementById('badgeCollection');
    if (!collection) return;
    
    // Clear collection
    collection.innerHTML = '';
    
    let hasBadges = false;
    
    // Add earned badges
    Object.keys(challengeData).forEach(challengeName => {
        const data = challengeData[challengeName];
        
        // Check if challenge is completed
        let isCompleted = false;
        if (data.completed !== undefined && data.total !== undefined) {
            isCompleted = data.completed === data.total;
        } else if (typeof data.completed === 'boolean') {
            isCompleted = data.completed;
        }
        
        if (isCompleted && badgeInfo[challengeName]) {
            hasBadges = true;
            const badge = badgeInfo[challengeName];
            const badgeElement = document.createElement('div');
            badgeElement.className = 'earned-badge';
            badgeElement.setAttribute('data-badge', challengeName);
            badgeElement.innerHTML = `
                <span class="badge-icon">${badge.icon}</span>
                <strong>${badge.name}</strong>
            `;
            collection.appendChild(badgeElement);
        }
    });
    
    // Show empty message if no badges
    if (!hasBadges) {
        collection.innerHTML = '<div class="empty-badge">Complete challenges to earn badges!</div>';
    }
}

function saveBadgeCollection() {
    // Badge collection is saved as part of challenge progress
    saveChallengeProgress();
}

// Checklist state management
function loadChecklistStates() {
    const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.id) {
            const saved = localStorage.getItem(`checkbox_${checkbox.id}`);
            if (saved === 'true') {
                checkbox.checked = true;
            }
        }
    });
    
    // Add event listeners to save state
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.id) {
                localStorage.setItem(`checkbox_${this.id}`, this.checked);
            }
        });
    });
}

// Homepage challenge progress update
const homeChallengeProgress = document.getElementById('challenge-progress');
if (homeChallengeProgress) {
    const saved = localStorage.getItem('challengeProgress');
    if (saved) {
        const savedData = JSON.parse(saved);
        if (savedData.mainChallenge) {
            const percentage = (savedData.mainChallenge.completed / savedData.mainChallenge.total) * 100;
            homeChallengeProgress.style.width = percentage + '%';
            const progressText = document.querySelector('.progress-text');
            if (progressText) {
                progressText.textContent = `${savedData.mainChallenge.completed}/7 days completed`;
            }
        }
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation to cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.card, .benefit-card, .food-card, .tip-card, .challenge-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Update progress text on homepage
function updateHomeProgress() {
    const saved = localStorage.getItem('challengeProgress');
    if (saved) {
        const data = JSON.parse(saved);
        if (data.mainChallenge) {
            const progressText = document.querySelector('.progress-text');
            if (progressText) {
                progressText.textContent = `${data.mainChallenge.completed}/7 days completed`;
            }
        }
    }
}

updateHomeProgress();
