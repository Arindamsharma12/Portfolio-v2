import ProfileCardComponent from "./components/profile-card.component";
import TypographyGroupComponent from "./components/typography-group.component";
import BackgroundDottedComponent from "./components/background-dotted.component";
import ExperienceComponent from "./components/experience.component";
import HeaderComponent from "@/components/common/header.component";

const HomeScreen = () => {
  return (
    <main className="relative w-full bg-[#F9F9F9] font-sans">
      {/* Background Grid */}
      <BackgroundDottedComponent />

      {/* Header */}
      <HeaderComponent />

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex w-full items-start lg:items-center justify-center pointer-events-none px-6 lg:px-8 pt-12 lg:py-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] items-start lg:items-center gap-x-16 lg:gap-x-24 gap-y-4 lg:gap-y-24 pointer-events-auto w-full max-w-7xl">
          <ProfileCardComponent />
          <TypographyGroupComponent />
          <ExperienceComponent />
        </div>
      </div>
    </main>
  );
};

export default HomeScreen;
