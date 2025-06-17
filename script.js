
  // Sample dog profile data
  const dogProfiles = [
    {
  id: 1,
  name: "Gael",
  age: "6 years",
  breed: "chihuahua",
  bio: "An Elegant beatiful lady who enjoys grooming sessions and gentle walks! 💅 Looking for a refined companion for tea time... I mean treat time!",
  image: "https://i.pinimg.com/736x/89/30/d5/8930d5e858675a0d1959f0f3eb9846df.jpg",
  interests: ["Grooming", "swimming", "Treats", "Quiet Time"],
  distance : 1.8 ,
  size: "Medium",
  energy: "very high",

    },
    {
      id: 2,
      name: "Landry",
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
      name: "Shamma",
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
      name: "Christina",
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
      name: "michael",
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
      name: "Sage",
      age: "6 years",
      breed: "Poodle",
      bio: "Elegant lady who enjoys grooming sessions and gentle walks! 💅 Looking for a refined companion for tea time... I mean treat time!",
      image: "https://i.pinimg.com/736x/9f/62/07/9f6207a86b17f4edefa125002ccc9b7f.jpg",
      distance: 0.3,
      interests: ["Grooming", "Gentle Walks", "Treats", "Quiet Time"],
      size: "Medium",
      energy: "Low",
    },
    {
      id: 7,
      name: "Trevor",
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
    
      id: 8,
      name: "Scooby",
      age: "11 years",
      breed: "Border Collie",
      bio: "Smart and energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/b2/ae/40/b2ae40091e18730921c79241f25e7cff.jpg",
      distance: 1.2,
      interests: ["Agility", "Frisbee", "Hiking", "Training"],
      size: "Medium",
      energy: "High",
    },
    {
    
      id: 9,
      name: "Bruno",
      age: "6 years",
      breed: "bull dog",
      bio: "energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/73/70/ee/7370ee413e5ee5ff8793c442e2290625.jpg",
      distance: 1.2,
      interests: ["swimming", "Treats", "Hiking", "Training"],
      size: "Medium",
      energy: "High",
    },
    {
      id: 10,
      name: "Reino",
      age: "15 years",
      breed: "Golden retriver",
      bio: "energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/8c/58/c6/8c58c6cedb3f9b9ddcb80e6d7cac3241.jpg",
      distance: 1.7,
      interests: ["kid", "Treats", "Hiking", "Training"],
      size: "Medium",
      energy: "High",
    },
    {
      id: 11,
      name: "Charlie",
      age: "9 years",
      breed: "Chihuahua",
      bio: "ea curious pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/94/9b/7b/949b7bff8d74acc214eaf8db280be880.jpg",
      distance: 1.3,
      interests: ["fetching", "Treats", "walking", "Training"],
      size: "Small",
      energy: "Very High",
    },
    {
      id: 12,
      name: "Shark the rapper",
      age: "2 years",
      breed: "BullDog",
      bio: "a confident pup who loves rapping! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/42/dc/6f/42dc6f42d5c0c72d67eecfe82108eac9.jpg",
      distance: 1.7,
      interests: ["Music", "rapping", "partying", "Training"],
      size: "Small",
      energy: "Very High",
    },
    {
      id: 13,
      name: "Erduardo",
      age: "6 years",
      breed: "Chihuahua",
      bio: "energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/9f/74/da/9f74dae50b165b45408cd9aa54f1f4a5.jpg",
      distance: 1.5,
      interests: ["Music", "rapping", "partying", "Training"],
      size: "Small",
      energy: "Very High",
    },
    {
      id: 14,
      name: "Stacy",
      age: "1 year",
      breed: "Chihuahua",
      bio: "energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/41/6a/e2/416ae2ef2b383cc63525e1645f96caf5.jpg",
      distance: 1.5,
      interests: ["art", "Music", "partying", "Training"],
      size: "Small",
      energy: "Very High",
    },
    {
      id: 15,
      name: "Anna",
      age: "7 year",
      breed: "Chihuahua",
      bio: "energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/25/37/e2/2537e243e74d4a10600b8c6ae475cfa6.jpg",
      distance: 1.5,
      interests: ["art", "Music", "partying", "Training"],
      size: "Small",
      energy: "Very High",
    },
    {
      id: 16,
      name: "cardi",
      age: "11 year",
      breed: "Chihuahua",
      bio: "energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/d4/90/cd/d490cdebcbc2da1e70a70de8fe5a0cc2.jpg",
      distance: 1.5,
      interests: ["art", "Music", "partying", "Training"],
      size: "Small",
      energy: "Very High",
    },
    {
      id: 17,
      name: "sky",
      age: "12 year",
      breed: "Chihuahua",
      bio: "energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/d5/23/99/d52399cb85c782f6f03eb8ffc919fa4e.jpg",
      distance: 1.5,
      interests: ["art", "Music", "partying", "Training"],
      size: "Small",
      energy: "Very High",
    },
    {
      id: 18,
      name: "snoop Dog",
      age: "9 year",
      breed: "Chihuahua",
      bio: "energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/95/2a/77/952a776b7978001d7d7ce3b98c409504.jpg",
      distance: 1.5,
      interests: ["art", "Music", "partying", "Training"],
      size: "Small",
      energy: "Very High",
    },
    {
      id: 19,
      name: "Oscar",
      age: "3 year",
      breed: "Chihuahua",
      bio: "energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/7c/33/2c/7c332ce183edc8051b200a7a86c5d1fb.jpg",
      distance: 1.5,
      interests: ["art", "Music", "partying", "Training"],
      size: "Small",
      energy: "Very High",
    },
    {
      id: 20,
      name: "martha",
      age: "5 year",
      breed: "Chihuahua",
      bio: "energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/8e/75/e2/8e75e27d3fe8972e1623387fc841454d.jpg",
      distance: 1.5,
      interests: ["art", "Music", "partying", "Training"],
      size: "Small",
      energy: "Very High",
    },
    {
      id: 21,
      name: "Amber",
      age: "7 year",
      breed: "Chihuahua",
      bio: "energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/e5/3c/bf/e53cbf1dcd3b7827b4c707be0bbdc618.jpg",
      distance: 1.5,
      interests: ["art", "Music", "partying", "Training"],
      size: "Small",
      energy: "Very High",
    },
    {
      id: 22,
      name: "Clara",
      age: "6 year",
      breed: "Chihuahua",
      bio: "energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/89/ae/03/89ae037e52956bd3277a2dca14563ce3.jpg",
      distance: 1.5,
      interests: ["art", "Music", "partying", "Training"],
      size: "Small",
      energy: "Very High",
    },
    {
      id: 23,
      name: "Zack",
      age: "2 year",
      breed: "Chihuahua",
      bio: "energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/8e/cb/1f/8ecb1f70322e45004b56931d595f759e.jpg",
      distance: 1.5,
      interests: ["art", "Music", "partying", "Training"],
      size: "Small",
      energy: "Very High",
    },
    {
      id: 24,
      name: "cooper",
      age: "11 year",
      breed: "Chihuahua",
      bio: "energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/d4/5a/63/d45a63a2b0b1480dc215ff950380e293.jpg",
      distance: 1.5,
      interests: ["art", "Music", "partying", "Training"],
      size: "Small",
      energy: "Very High",
    },
    {
      id: 25,
      name: "Luna",
      age: "7 year",
      breed: "Chihuahua",
      bio: "energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "",
      distance: 1.5,
      interests: ["art", "Music", "partying", "Training"],
      size: "Small",
      energy: "Very High",
    },
    {
      id: 26,
      name: "charlie",
      age: "7 year",
      breed: "Chihuahua",
      bio: "energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/5b/40/bd/5b40bdbe8b8fe41e40eed4cb428c3f80.jpg",
      distance: 1.5,
      interests: ["art", "Music", "partying", "Training"],
      size: "Small",
      energy: "Very High",
    },
    {
      id: 27,
      name: "Duke",
      age: "9 year",
      breed: "Chihuahua",
      bio: "energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/b8/5e/6d/b85e6d408c005eed35ac67c0a6bf1ac8.jpg",
      distance: 1.5,
      interests: ["art", "Music", "partying", "Training"],
      size: "Small",
      energy: "Very High",
    },
    {
      id: 28,
      name: "kate",
      age: "2 year",
      breed: "Chihuahua",
      bio: "energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/27/ad/7b/27ad7bf84b4f226842e08e3a33004c89.jpg",
      distance: 1.5,
      interests: ["art", "Music", "partying", "Training"],
      size: "Small",
      energy: "Very High",
    },
    {
      id: 29,
      name: "Scott",
      age: "4 year",
      breed: "Chihuahua",
      bio: "energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/31/4c/05/314c059480cef9c165c313d2dbc630d8.jpg",
      distance: 1.5,
      interests: ["art", "Music", "partying", "Training"],
      size: "Small",
      energy: "Very High",
    },
    {
      id: 30,
      name: "Issabelle",
      age: "7 year",
      breed: "Chihuahua",
      bio: "energetic pup who loves agility training! 🏃‍♀️ Looking for an active companion for hiking and frisbee games.",
      image: "https://i.pinimg.com/736x/ce/24/40/ce24405b9d0068b15efd5408ef92c9ec.jpg",
      distance: 1.9,
      interests: ["art", "Music", "partying", "Training"],
      size: "Small",
      energy: "Very High",
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
  
  