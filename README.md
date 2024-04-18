# AMRUTAM AYURVEDA

Amrutam Ayurveda: Your trusted companion on the journey to holistic wellness. With a rich heritage of ancient Ayurvedic wisdom and modern expertise, we offer a comprehensive range of natural products and remedies tailored to nourish your body, mind, and soul, empowering you to embrace a healthier, happier life.

## Table of Contents

- [Installation](#installation)
- [Components](#components)


## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm run dev`.





## Components

## Navigation

## Navigation Component

The Navigation component is responsible for rendering the navigation bar at the top of the webpage. It includes the Amrutam logo, navigation links, and login/signup buttons.

### Features
- Displays the Amrutam logo on the left side.
- Renders navigation links dynamically based on the data provided in the `navigationItem` array.
- Includes login and sign-up buttons on the right side.

### Usage
```jsx
import React from 'react';
import Navigation from './Navigation';

function App() {
  return (
    <div>
      <Navigation />
      {/* Other content of the webpage */}
    </div>
  );
}

export default App;
```

### Props
The Navigation component doesn't accept any props.

### Example
```jsx
<Navigation />
```

### Dependencies
- React
- Button Component (used for login and sign-up buttons)

### Notes
- Ensure to provide proper styling classes for consistent appearance across different screen sizes.
- Customize the navigation links and buttons according to your application's requirements.

## Profile

## Profile Component

The Profile component displays detailed information about a doctor, including their profile picture, name, specialty, rating, follower count, following count, and number of posts. It also provides a button to book an appointment with the doctor.

### Features
- Displays the doctor's profile picture, name, and specialty.
- Shows the doctor's rating using star icons.
- Provides information about the number of followers, following, and posts.
- Includes a button to book an appointment with the doctor.

### Usage
```jsx
import React from 'react';
import Profile from './Profile';

function App() {
  return (
    <div>
      <Profile />
      {/* Other content of the webpage */}
    </div>
  );
}

export default App;
```

### Props
The Profile component doesn't accept any props.

### Example
```jsx
<Profile />
```

### Dependencies
- React
- Button Component (used for the appointment booking button)

### Notes
- Customize the doctor's profile information and styling according to your application's requirements.
- Ensure proper alignment and spacing for a visually appealing layout.

## AboutMeCard

## AboutMeCard Component

The AboutMeCard component displays information about a doctor's background, including a brief introduction, spoken languages, and social media links.

### Features
- Provides a brief introduction about the doctor.
- Allows users to follow the doctor.
- Displays the spoken languages of the doctor.
- Includes social media icons for the doctor's profiles.

### Usage
```jsx
import React from 'react';
import AboutMeCard from './AboutMeCard';

function App() {
  return (
    <div>
      <AboutMeCard />
      {/* Other content of the webpage */}
    </div>
  );
}

export default App;
```

### Props
The AboutMeCard component doesn't accept any props.

### Example
```jsx
<AboutMeCard />
```

### Dependencies
- React
- Button Component (used for the follow button)

### Notes
- Customize the doctor's introduction, spoken languages, and social media links according to your application's requirements.
- Ensure proper alignment and styling for a visually appealing layout.

## SpecialiseCard

## AboutMeCard Component

The AboutMeCard component displays information about a doctor's background, including a brief introduction, spoken languages, and social media links.

### Features
- Provides a brief introduction about the doctor.
- Allows users to follow the doctor.
- Displays the spoken languages of the doctor.
- Includes social media icons for the doctor's profiles.

### Usage
```jsx
import React from 'react';
import AboutMeCard from './AboutMeCard';

function App() {
  return (
    <div>
      <AboutMeCard />
      {/* Other content of the webpage */}
    </div>
  );
}

export default App;
```

### Props
The AboutMeCard component doesn't accept any props.

### Example
```jsx
<AboutMeCard />
```

### Dependencies
- React
- Button Component (used for the follow button)

### Notes
- Customize the doctor's introduction, spoken languages, and social media links according to your application's requirements.
- Ensure proper alignment and styling for a visually appealing layout.

## SkillCard
## SkillCard Component

The SkillCard component displays the specific concerns or medical conditions that the doctor treats.

### Features
- Provides a list of concerns or medical conditions treated by the doctor.
- Supports adding additional concerns with a "Show More" button.

### Usage
```jsx
import React from 'react';
import SkillCard from './SkillCard';

function App() {
  return (
    <div>
      <SkillCard />
      {/* Other content of the webpage */}
    </div>
  );
}

export default App;
```

### Props
The SkillCard component doesn't accept any props.

### Example
```jsx
<SkillCard />
```

### Dependencies
- React
- CardCover Component (used for the card cover styling)
- TagsSkill Component (used for displaying individual skills)

### Notes
- Customize the list of concerns or medical conditions according to the doctor's expertise.
- Ensure proper styling and layout for a visually appealing presentation.
- Use the "Show More" button to allow users to view additional concerns if needed.

## SpecialiseCard Component

The SpecialiseCard component showcases the areas of specialization of the doctor, along with corresponding icons.

### Features
- Displays the areas of specialization of the doctor.
- Each specialization is accompanied by an icon for visual representation.

### Usage
```jsx
import React from 'react';
import SpecialiseCard from './SpecialiseCard';

function App() {
  return (
    <div>
      <SpecialiseCard />
      {/* Other content of the webpage */}
    </div>
  );
}

export default App;
```

### Props
The SpecialiseCard component doesn't accept any props.

### Example
```jsx
<SpecialiseCard />
```

### Dependencies
- React
- CardCover Component (used for the card cover styling)

### Notes
- Customize the areas of specialization and corresponding icons according to the doctor's expertise.
- Ensure proper alignment and styling for a visually appealing layout.

## ExperienceCard

## ExperienceCard Component

The ExperienceCard component displays the doctor's work experience, including details about their previous employment and duration of practice.

### Features
- Presents the doctor's work experience in a structured and easy-to-read format.
- Includes information about the clinics or hospitals where the doctor has worked, along with their roles and employment periods.

### Usage
```jsx
import React from 'react';
import ExperienceCard from './ExperienceCard';

function App() {
  return (
    <div>
      <ExperienceCard />
      {/* Other content of the webpage */}
    </div>
  );
}

export default App;
```

### Props
The ExperienceCard component doesn't accept any props.

### Example
```jsx
<ExperienceCard />
```

### Dependencies
- React
- CardCover Component (used for the card cover styling)

### Notes
- Customize the work experience details according to the doctor's professional history.
- Ensure consistent styling and layout for a cohesive presentation.
- Add additional employment records as needed to provide a comprehensive overview of the doctor's career.

## FeaturedReview

## FeaturedReview Component

The FeaturedReview component displays selected reviews from patients, highlighting their experiences and feedback about the doctor's services.

### Features
- Showcases reviews with patient names, consultation details, and dates.
- Includes star ratings to reflect the overall satisfaction level of patients.
- Provides comments or testimonials shared by patients about their experience with the doctor.

### Usage
```jsx
import React from 'react';
import FeaturedReview from './FeaturedReview';

function App() {
  return (
    <div>
      <FeaturedReview />
      {/* Other content of the webpage */}
    </div>
  );
}

export default App;
```

### Props
The FeaturedReview component doesn't accept any props.

### Example
```jsx
<FeaturedReview />
```

### Dependencies
- React
- CardCover Component (used for the card cover styling)

### Notes
- Customize the review details to showcase genuine patient feedback.
- Ensure the reviews displayed are representative of the overall patient satisfaction level.
- Use consistent styling and layout to maintain visual coherence with other components.

## AppointmentDetail

## AppointmentDetail Component

The AppointmentDetail component allows users to schedule appointments by selecting the mode of session, time slot, and date.

### Features
- Displays the appointment fee and allows users to view and select different modes of session.
- Provides a date picker component to choose the desired appointment date.
- Offers morning and evening time slots for appointment scheduling.
- Includes a button to finalize and confirm the appointment.

### Usage
```jsx
import React from 'react';
import AppointmentDetail from './AppointmentDetail';

function App() {
  return (
    <div>
      <AppointmentDetail />
      {/* Other content of the webpage */}
    </div>
  );
}

export default App;
```

### Props
The AppointmentDetail component doesn't accept any props.

### Example
```jsx
<AppointmentDetail />
```

### Dependencies
- React
- TimeSlot Component
- DatePicker Component
- MorningTimeSlot Component
- EveningTimeSlot Component
- Button Component

### Notes
- Ensure that the appointment fee is updated dynamically based on the selected options.
- Customize the appearance and behavior of the date picker to match the overall design theme.
- Implement backend functionality to handle appointment scheduling and confirmation.

