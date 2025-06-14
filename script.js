// Sample profile data
const profiles = [
    {
      id: 1,
      name: "Emma",
      age: 22,
      bio: "Adventure seeker 🌟 Love hiking, coffee, and good conversations. Looking for someone to explore the city with!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face",
      distance: 10,
      interests: ["Travel", "Coffee", "Hiking", "Photography"],
    },
    {
      id: 2,
      name: "Alex",
      age: 28,
      bio: "Foodie and dog lover 🐕 Always up for trying new restaurants or a weekend getaway.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
      distance: 5,
      interests: ["Food", "Dogs", "Music", "Cooking"],
    },
    {
      id: 3,
      name: "Sarah",
      age: 24,
      bio: "Artist by day, Netflix enthusiast by night 🎨 Looking for someone who appreciates creativity and humor.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face",
      distance: 3,
      interests: ["Art", "Movies", "Books", "Yoga"],
    },
    {
      id: 4,
      name: "Mike",
      age: 19,
      bio: "Tech enthusiast and weekend warrior. Love coding, gaming, and outdoor adventures.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
      distance: 4,
      interests: ["Technology", "Gaming", "Fitness", "Travel"],
    },
    {
      id: 5,
      name: "Jessica",
      age: 30,
      bio: "Yoga instructor and wellness coach. Seeking balance and meaningful connections.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face",
      distance: 1,
      interests: ["Yoga", "Wellness", "Nature", "Meditation"],
    },
  ]
  
  // Sample dog profile data
  const dogProfiles = [
    {
      id: 1,
      name: "Buddy",
      age: "3 years",
      breed: "Golden Retriever",
      bio: "Friendly golden boy who loves fetch and belly rubs! 🎾 Great with kids and other dogs. Looking for a playmate who enjoys long walks and park adventures!",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=600&fit=crop&crop=face",
      distance: 0.5,
      interests: ["Fetch", "Swimming", "Treats", "Belly Rubs"],
      size: "Large",
      energy: "High",
    },
    {
      id: 2,
      name: "tina",
      age: "2 years",
      breed: "Border Collie",
      bio: "Smart and energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=600&fit=crop&crop=face",
      distance: 1.2,
      interests: ["Agility", "Frisbee", "Hiking", "Training"],
      size: "Medium",
      energy: "Very High",
    },
    {
      id: 3,
      name: "Max",
      age: "5 years",
      breed: "French Bulldog",
      bio: "Chill city dog who enjoys short walks and lots of naps! 😴 Perfect apartment companion looking for a low-key friend.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=600&fit=crop&crop=face",
      distance: 0.8,
      interests: ["Napping", "Snacks", "City Walks", "Cuddles"],
      size: "Small",
      energy: "Low",
    },
    {
      id: 4,
      name: "Bella",
      age: "4 years",
      breed: "Chihuahua",
      bio: "Sweet rescue pup who loves making new friends! 🐕 Great with children and enjoys beach days and car rides.",
      image: "https://wallpapers.com/images/hd/funny-chihuahua-pictures-163qgrxp7atwywld.jpg",
      distance: 2.1,
      interests: ["Beach", "Car Rides", "Kids", "Socializing"],
      size: "Large",
      energy: "Medium",
    },
    {
      id: 5,
      name: "Max",
      age: "1 year",
      breed: "Husky",
      bio: "Curious puppy who loves exploring and sniffing everything! 👃 Looking for a patient friend to show me the ropes.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbHwqaereiRZ8RXN53julnAlSEZcpxZudD4w&s",
      distance: 1.5,
      interests: ["Exploring", "Sniffing", "Learning", "Playing"],
      size: "Medium",
      energy: "High",
    },
    {
      id: 6,
      name: "Scooby",
      age: "6 years",
      breed: "Poodle",
      bio: "Elegant lady who enjoys grooming sessions and gentle walks! 💅 Looking for a refined companion for tea time... I mean treat time!",
      image: "https://cdn.shopify.com/s/files/1/2456/1591/files/Picture2_lola_our_gsd_480x480.png?v=1645631754",
      distance: 0.3,
      interests: ["Grooming", "Gentle Walks", "Treats", "Quiet Time"],
      size: "Medium",
      energy: "Low",
    },
  ]
  
  // App state
  let currentProfileIndex = 0
  let matches = []
  let activeTab = "discover"
  
  // DOM elements
  const cardStack = document.querySelector(".card-stack")
  const noMoreProfiles = document.getElementById("no-more-profiles")
  const matchesGrid = document.getElementById("matches-grid")
  const noMatches = document.getElementById("no-matches")
  
  // Initialize app
  function init() {
    renderCurrentProfile()
    setupTabNavigation()
    updateMatchesDisplay()
  }
  
  // Create profile card HTML
  function createProfileCard(profile) {
    return `
          <div class="profile-card absolute inset-0 w-full h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer" data-profile-id="${profile.id}">
              <div class="relative h-full">
                  <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('${profile.image}')"></div>
                  <div class="gradient-overlay absolute inset-0"></div>
                  
                  <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div class="space-y-3">
                          <div class="flex items-center gap-2">
                              <h2 class="text-2xl font-bold">${profile.name}</h2>
                              <span class="text-xl">${profile.age}</span>
                          </div>
                          
                          <div class="flex items-center gap-1 text-sm opacity-90">
                              <span>${profile.distance} miles away</span>
                          </div>
                          
                          <p class="text-sm opacity-90 line-clamp-3">${profile.bio}</p>
                          
                          <div class="flex flex-wrap gap-2">
                              ${profile.interests
                                .slice(0, 3)
                                .map(
                                  (interest) =>
                                    `<span class="px-2 py-1 bg-white/20 rounded-full text-xs">${interest}</span>`,
                                )
                                .join("")}
                          </div>
                      </div>
                  </div>
                  
                  <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
                      <button class="swipe-btn w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors" data-action="pass">
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                      </button>
                      
                      <button class="swipe-btn w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-green-600 transition-colors" data-action="like">
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                          </svg>
                      </button>
                  </div>
              </div>
          </div>
      `
  }
  
  // Create dog profile card HTML
  function createDogProfileCard(dog) {
    return `
          <div class="profile-card dog-card absolute inset-0 w-full h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer" data-profile-id="${dog.id}">
              <div class="relative h-full">
                  <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('${dog.image}')"></div>
                  <div class="gradient-overlay absolute inset-0"></div>
                  
                  <!-- Energy Level Indicator -->
                  <div class="absolute top-4 right-4">
                      <div class="bg-white/90 rounded-full px-3 py-1 text-xs font-semibold ${getEnergyColor(dog.energy)}">
                          ${dog.energy} Energy
                      </div>
                  </div>
                  
                  <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div class="space-y-3">
                          <div class="flex items-center gap-2">
                              <h2 class="text-2xl font-bold">${dog.name}</h2>
                              <span class="text-lg opacity-90">${dog.age}</span>
                          </div>
                          
                          <div class="flex items-center gap-2 text-sm opacity-90">
                              <span class="breed-badge">${dog.breed}</span>
                              <span>•</span>
                              <span>${dog.size}</span>
                              <span>•</span>
                              <span>${dog.distance} miles away</span>
                          </div>
                          
                          <p class="text-sm opacity-90 line-clamp-3">${dog.bio}</p>
                          
                          <div class="flex flex-wrap gap-2">
                              ${dog.interests
                                .slice(0, 3)
                                .map(
                                  (interest) =>
                                    `<span class="px-2 py-1 bg-white/20 rounded-full text-xs">${interest}</span>`,
                                )
                                .join("")}
                          </div>
                      </div>
                  </div>
                  
                  <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
                      <button class="swipe-btn w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-red-500 hover:bg-red-50 transition-colors" data-action="pass" title="Pass">
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                      </button>
                      
                      <button class="swipe-btn w-14 h-14 bg-orange-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-orange-600 transition-colors" data-action="like" title="Like - Arrange Playdate!">
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                          </svg>
                      </button>
                  </div>
              </div>
          </div>
      `
  }
  
  // Get energy level color class
  function getEnergyColor(energy) {
    switch (energy) {
      case "Very High":
        return "text-red-600"
      case "High":
        return "text-orange-600"
      case "Medium":
        return "text-yellow-600"
      case "Low":
        return "text-green-600"
      default:
        return "text-gray-600"
    }
  }
  
  // Render current profile
  function renderCurrentProfile() {
    if (currentProfileIndex >= dogProfiles.length) {
      cardStack.innerHTML = ""
      noMoreProfiles.classList.remove("hidden")
      return
    }
  
    const dog = dogProfiles[currentProfileIndex]
    cardStack.innerHTML = createDogProfileCard(dog)
    noMoreProfiles.classList.add("hidden")
  
    // Add event listeners to swipe buttons
    const swipeButtons = cardStack.querySelectorAll(".swipe-btn")
    swipeButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation()
        const action = btn.dataset.action
        handleSwipe(action === "like" ? "right" : "left")
      })
    })
  
    // Add touch/mouse swipe functionality
    addSwipeGestures()
  }
  
  // Handle swipe action
  function handleSwipe(direction) {
    const currentDog = dogProfiles[currentProfileIndex]
    const profileCard = document.querySelector(".profile-card")
  
    if (!profileCard) return
  
    // Add swipe animation
    profileCard.classList.add(direction === "right" ? "swipe-right" : "swipe-left")
  
    // If swiped right, add to matches
    if (direction === "right" && currentDog) {
      matches.push(currentDog)
      updateMatchesDisplay()
      showMatchNotification(currentDog)
    }
  
    // Move to next profile after animation
    setTimeout(() => {
      currentProfileIndex++
      renderCurrentProfile()
    }, 300)
  }
  
  // Show match notification
  function showMatchNotification(dog) {
    // Create a simple notification
    const notification = document.createElement("div")
    notification.className =
      "fixed top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 match-animation"
    notification.innerHTML = `
      <div class="flex items-center gap-2">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.5 12a7.5 7.5 0 0015 0 7.5 7.5 0 00-15 0zm7.5-5.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z"/>
        </svg>
        <span>It's a match with ${dog.name}! 🐕</span>
      </div>
    `
  
    document.body.appendChild(notification)
  
    setTimeout(() => {
      notification.remove()
    }, 3000)
  }
  
  // Add swipe gesture support
  function addSwipeGestures() {
    const profileCard = document.querySelector(".profile-card")
    if (!profileCard) return
  
    let startX = 0
    let currentX = 0
    let isDragging = false
  
    const handleStart = (e) => {
      isDragging = true
      startX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX
      profileCard.style.transition = "none"
    }
  
    const handleMove = (e) => {
      if (!isDragging) return
  
      e.preventDefault()
      currentX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX
      const deltaX = currentX - startX
      const rotation = deltaX * 0.1
  
      profileCard.style.transform = `translateX(${deltaX}px) rotate(${rotation}deg)`
      profileCard.style.opacity = Math.max(0.5, 1 - Math.abs(deltaX) / 300)
  
      // Add visual feedback
      if (deltaX > 50) {
        profileCard.style.borderColor = "#ff6b35" // Orange for like
      } else if (deltaX < -50) {
        profileCard.style.borderColor = "#ef4444" // Red for pass
      } else {
        profileCard.style.borderColor = "transparent"
      }
    }
  
    const handleEnd = () => {
      if (!isDragging) return
      isDragging = false
  
      const deltaX = currentX - startX
      const threshold = 100
  
      profileCard.style.transition = "transform 0.3s ease, opacity 0.3s ease"
      profileCard.style.borderColor = "transparent"
  
      if (Math.abs(deltaX) > threshold) {
        handleSwipe(deltaX > 0 ? "right" : "left")
      } else {
        profileCard.style.transform = "translateX(0) rotate(0deg)"
        profileCard.style.opacity = "1"
      }
    }
  
    // Mouse events
    profileCard.addEventListener("mousedown", handleStart)
    document.addEventListener("mousemove", handleMove)
    document.addEventListener("mouseup", handleEnd)
  
    // Touch events
    profileCard.addEventListener("touchstart", handleStart, { passive: false })
    document.addEventListener("touchmove", handleMove, { passive: false })
    document.addEventListener("touchend", handleEnd)
  }
  
  // Update matches display
  function updateMatchesDisplay() {
    if (matches.length === 0) {
      matchesGrid.innerHTML = ""
      noMatches.classList.remove("hidden")
    } else {
      noMatches.classList.add("hidden")
      matchesGrid.innerHTML = matches
        .map(
          (match) => `
              <div class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow" onclick="openDogProfile(${match.id})">
                  <div class="aspect-square relative">
                      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('${match.image}')"></div>
                      <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div class="absolute bottom-2 left-2 text-white">
                          <p class="font-semibold">${match.name}</p>
                          <p class="text-xs opacity-90">${match.breed}</p>
                      </div>
                      <div class="absolute top-2 right-2">
                          <div class="bg-white/90 rounded-full px-2 py-1 text-xs font-semibold text-orange-600">
                              ${match.age}
                          </div>
                      </div>
                  </div>
              </div>
          `,
        )
        .join("")
    }
  }
  
  // Open dog profile
  function openDogProfile(dogId) {
    const dog = matches.find((m) => m.id === dogId)
    if (dog) {
      alert(`Planning a playdate with ${dog.name} the ${dog.breed}! 🐕 Let's go to the dog park!`)
    }
  }
  
  // Setup tab navigation
  function setupTabNavigation() {
    const tabButtons = document.querySelectorAll(".tab-btn")
    const tabContents = document.querySelectorAll(".tab-content")
  
    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetTab = btn.dataset.tab
  
        // Update active tab button
        tabButtons.forEach((b) => {
          b.classList.remove("tab-active")
          b.classList.add("text-gray-600", "hover:text-orange-600")
        })
        btn.classList.add("tab-active")
        btn.classList.remove("text-gray-600", "hover:text-orange-600")
  
        // Show target tab content
        tabContents.forEach((content) => {
          content.classList.add("hidden")
        })
        document.getElementById(`${targetTab}-tab`).classList.remove("hidden")
  
        activeTab = targetTab
      })
    })
  }
  
  // Keyboard navigation support
  function setupKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
      if (activeTab === "discover") {
        switch (e.key) {
          case "ArrowLeft":
            handleSwipe("left")
            break
          case "ArrowRight":
            handleSwipe("right")
            break
        }
      }
    })
  }
  
  // Reset app state
  function resetApp() {
    currentProfileIndex = 0
    matches = []
    renderCurrentProfile()
    updateMatchesDisplay()
  }
  
  // Fun dog facts for loading states
  const dogFacts = [
    "Dogs have three eyelids! 👁️",
    "A dog's sense of smell is 10,000 times stronger than humans! 👃",
    "Dogs can learn over 150 words! 🗣️",
    "Puppies are born deaf and blind! 🐶",
    "Dogs sweat through their paw pads! 🐾",
  ]
  
  function getRandomDogFact() {
    return dogFacts[Math.floor(Math.random() * dogFacts.length)]
  }
  
  // Initialize the app when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    init()
    setupKeyboardNavigation()
  
    // Show a welcome message
    setTimeout(() => {
      console.log("🐕 Welcome to Tin Dog! " + getRandomDogFact())
    }, 1000)
  })
  
  // Export functions for potential future use
  window.TinDogApp = {
    resetApp,
    handleSwipe,
    dogProfiles,
    matches,
    getRandomDogFact,
  }
  
  