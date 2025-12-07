# Cumulative Layout Shift (CLS) Analysis - Portfolio Project

## Overview
CLS is a metric that measures unexpected layout shifts during page load and interaction. Target CLS score: **< 0.1** (Good). A score > 0.25 is considered Poor.

---

## 🔴 CRITICAL CLS ISSUES IDENTIFIED

### 1. **Home Section - Typing Animation Layout Shift** ⚠️ HIGH PRIORITY
**Location:** `src/sections/Home.jsx` (Lines 153-174)
**Problem:** 
- The role text uses `min-h-[1.6em]` container but text content changes dynamically
- Cursor animation (`animate-pulse`) adds visual shift
- Text transitions between different role strings with varying widths
- Example: "Developer" → "Innovator" → "CTF Player" have different widths causing horizontal shift

**Current Code:**
```jsx
<motion.div
  className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
  ...
>
  <span>{roles[index].substring(0, subindex)}</span>
  <span className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle" style={{height: "1em"}}>
  </span>
</motion.div>
```

**Impact:** 
- Large text element (text-xl to text-4xl) shifting horizontally as characters type
- Cursor element adds width variation
- High visibility area affecting overall CLS score

**Fix:** Add `min-w` constraint or reserve space for longest role text

---

### 2. **Navbar - Position Fixed with Dynamic Height** ⚠️ MEDIUM PRIORITY
**Location:** `src/components/Navbar.jsx` (Line 74-93)
**Problem:**
- Navbar has fixed positioning with `-translate-y-full` transition
- Menu button and text change dimensions at different breakpoints
- No reserved height/min-height for the navbar container
- Logo "SithumW" appears/disappears based on screen size (hidden sm:block)

**Current Code:**
```jsx
<nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 
  transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
>
  <div className="flex items-center space-x-2">
    <div className="text-2xl font-bold text-white hidden sm:block">SithumW</div>
  </div>
```

**Impact:**
- Navigation hide/show causes content shift below navbar
- No fixed navbar height can cause first content element to shift
- Logo visibility change shifts navbar content horizontally

**Fix:** Add explicit navbar height and ensure consistent layout across breakpoints

---

### 3. **Contact Form - Submit Status Message** ⚠️ MEDIUM PRIORITY
**Location:** `src/sections/Contact.jsx` (Dynamic form submission)
**Problem:**
- Form submission adds/removes success/error messages
- Messages appear below form without reserved space
- No `min-h` for message container causing content below to shift

**Current Code Pattern:**
```jsx
const [submitStatus, setSubmitStatus] = useState('');
// No reserved height for status message output
```

**Impact:**
- When form is submitted, status message appears pushing footer down
- Footer and other sections shift upward causing CLS

**Fix:** Reserve space for status message with `min-h` even when empty

---

### 4. **Projects Section - Dynamic Background Color** ⚠️ MEDIUM PRIORITY
**Location:** `src/sections/Projects.jsx` (Lines 125-137)
**Problem:**
- Section height is dynamic: `${100*projects.length}vh`
- Background color changes with `transition: "background-color 400ms ease"`
- Multiple layout elements reposition as activeIndex changes

**Current Code:**
```jsx
<section id="projects" ref={sceneRef}
  className="relative text-white"
  style={{
    height: `${100*projects.length}vh`,
    backgroundColor: activeProject.bgColor,
    transition: "background-color 400ms ease"
  }}
>
```

**Impact:**
- Not a direct CLS but paired with absolute positioning of project cards
- Can cause visual instability during scroll

**Fix:** Smooth transition is already applied, but ensure no positional changes occur

---

### 5. **Skills Section - Horizontal Scroll Layout Shift** ⚠️ LOW-MEDIUM PRIORITY
**Location:** `src/sections/Skills.jsx` (Lines 38-75)
**Problem:**
- Skill icons scale on hover: `whileHover={{ scale: 1.1 }}`
- No reserved space for scaled elements
- Icons expand by 10% on hover causing surrounding layout to shift

**Current Code:**
```jsx
<motion.div
  className="flex flex-col items-center justify-center group cursor-pointer"
  whileHover={{ scale: 1.1 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
```

**Impact:**
- Hover state causes slight horizontal/vertical shift of skill items
- Affects visible skills and pushes others out of viewport slightly

**Fix:** Use transform with `transform-gpu` or reserve space for scaled state

---

### 6. **About Section - Image Frame Layout** ⚠️ LOW PRIORITY
**Location:** `src/sections/About.jsx` (Lines 60-85)
**Problem:**
- Image has multiple positioned glowing elements (absolute positioned)
- Glowing circles are positioned at corners: `-top-6 -right-6`, `-bottom-4 -left-4`
- Blur effects can cause slight rendering shifts

**Current Code:**
```jsx
<div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-[#ffcc02] to-[#ff6b35] rounded-full blur-lg opacity-60 animate-pulse" />
<div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#1cd8d2] rounded-full blur-md opacity-40 animate-pulse delay-500" />
```

**Impact:**
- Absolute positioning prevents CLS, but blur animation might cause repaints
- Minor impact on CLS but could affect performance

**Fix:** Use `will-change: filter` on glowing elements

---

### 7. **Footer - Dynamic Copyright Year** ⚠️ LOW PRIORITY
**Location:** `src/sections/Footer.jsx` (Line 5-6)
**Problem:**
- Copyright year updates dynamically: `© {currentYear} SithumW`
- Year changes from 2024→2025 causing width change
- No reserved width for year number

**Current Code:**
```jsx
const currentYear = new Date().getFullYear();
// ...
<p className="text-xs text-slate-600">
  © {currentYear} SithumW. All rights reserved.
</p>
```

**Impact:**
- Minor horizontal shift when year changes
- Low visibility impact but still contributes to CLS

**Fix:** Add `min-w` or `tabular-nums` font-variant for consistent number width

---

### 8. **Intro Animation - Full Screen Flash** ⚠️ MEDIUM PRIORITY
**Location:** `src/components/IntroAnimation.jsx` (Lines 27-55)
**Problem:**
- Full-screen overlay (`inset-0`) appears and disappears with `exit: { y: "-100%" }`
- Large layout shift when intro animation completes
- Entire viewport moves up when intro finishes

**Current Code:**
```jsx
<motion.div
  className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white overflow-hidden"
  initial={{ y: 0 }}
  exit={{ y: "-100%" }}
  transition={{
    duration: 1.05,
    ease: [0.22, 1, 0.36, 1],
  }}
>
```

**Impact:**
- Significant CLS when intro animation exits
- Entire page content shifts up
- This is intentional design but registers as CLS

**Fix:** Likely acceptable as it's intentional, but consider `will-change: transform`

---

### 9. **CustomCursor - Potential Reflow Issues** ⚠️ LOW PRIORITY
**Location:** `src/components/CustomCursor.jsx` (Lines 15-24)
**Problem:**
- Custom cursor uses `translate` which is good for performance
- But rapid `mousemove` events updating state could cause layout thrashing
- `pointer-events-none` helps but state updates on every pixel movement

**Current Code:**
```jsx
const [position, setPosition] = useState({x:0, y:0});

useEffect(()=>{
  const moveHandler = (e) =>{
    setPosition({x: e.clientX, y: e.clientY});
  };
  window.addEventListener("mousemove", moveHandler);
}, []);
```

**Impact:**
- Not direct CLS but high frequency re-renders
- Could affect CLS perception due to jank
- Contributes to INP (Interaction to Next Paint) issues

**Fix:** Use `passive: true` (already good), but consider throttling or `useLayoutEffect`

---

### 10. **Home Section - Avatar Loading State** ⚠️ MEDIUM PRIORITY
**Location:** `src/sections/Home.jsx` (Lines 102-108)
**Problem:**
- `LoadingScreen` returns if `!avatarLoaded`
- Avatar is set to load immediately: `setAvatarLoaded(true)`
- If image takes time to load, there's a content swap
- No loading skeleton or placeholder dimensions

**Current Code:**
```jsx
const [avatarLoaded, setAvatarLoaded] = useState(true);

// Show loading screen until avatar is loaded
if (!avatarLoaded) {
  return <LoadingScreen />;
}
```

**Impact:**
- If avatar image delays, full page layout shifts from LoadingScreen to main content
- Loading screen is full viewport height
- High visibility shift

**Fix:** Add image preload and use `onLoad` callback to track actual image load

---

## 📊 CLS SUMMARY TABLE

| Issue | Severity | Component | Impact | Fix Priority |
|-------|----------|-----------|--------|--------------|
| Typing Animation | HIGH | Home | Large text element | P1 |
| Navbar Fixed Height | MEDIUM | Navbar | Navigation shift | P1 |
| Form Status Message | MEDIUM | Contact | Content shift on submit | P1 |
| Projects Dynamic Height | MEDIUM | Projects | Visual instability | P2 |
| Skill Icons Hover Scale | LOW-MEDIUM | Skills | Hover shift | P2 |
| About Frame Glows | LOW | About | Minor repaints | P3 |
| Footer Year Change | LOW | Footer | Minor width change | P3 |
| Intro Animation Exit | MEDIUM | IntroAnimation | Full page shift | P2 |
| CustomCursor Reflows | LOW | CustomCursor | Performance issue | P3 |
| Avatar Loading | MEDIUM | Home | Full layout swap | P1 |

---

## 🎯 RECOMMENDED FIXES (Priority Order)

### P1 - CRITICAL
1. **Fix Typing Animation** - Add `min-w` to role text container
2. **Fix Navbar Height** - Add explicit `min-h` to navbar
3. **Reserve Form Message Space** - Add `min-h` to status message container
4. **Fix Avatar Loading** - Use proper image preload or skeleton loader

### P2 - HIGH
5. **Projects Smooth Layout** - Ensure sticky positioning stability
6. **Intro Animation** - Add `will-change: transform`
7. **Form Message Visibility** - Ensure smooth entry/exit

### P3 - MEDIUM
8. **Skill Icons Spacing** - Add margin buffer for hover scale
9. **Footer Year Format** - Use `tabular-nums` font-variant
10. **CustomCursor Optimization** - Consider throttling mousemove

---

## 🔧 IMPLEMENTATION RECOMMENDATIONS

### Quick Wins (5 min each)
- Add `tabular-nums` to footer copyright text
- Add `will-change: filter` to glowing elements
- Add `passive: true` to scroll listeners

### Medium Effort (15-30 min each)
- Fix navbar with explicit height
- Reserve space for form status message
- Add `min-w` to typing animation text

### Higher Effort (30+ min)
- Implement image preloading strategy
- Add skill icon spacing buffer
- Optimize cursor movement throttling

---

## 📈 Expected CLS Improvement

After implementing P1 fixes:
- **Before:** Estimated CLS ~0.15-0.25 (Poor)
- **After:** Estimated CLS ~0.05-0.10 (Good)

Implementing all fixes could achieve **CLS < 0.05 (Excellent)**

