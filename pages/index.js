// near top
import OnboardingModal from "@/components/OnboardingModal";
const [showOnboard, setShowOnboard] = useState(
  !localStorage.getItem("onboardingCompleted")
);

// near return
{showOnboard && <OnboardingModal onFinish={() => {
  localStorage.setItem("onboardingCompleted", "true");
  setShowOnboard(false);
}} />}
