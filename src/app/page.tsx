import Image from "next/image";
import MainScreen from '../blocks/mainScreen/MainScreen'
import Services from "@/blocks/services/Services";
import MainAbout from "@/blocks/mainAbout/MainAbout";
import MainNews from "@/blocks/mainNews/MainNews";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
export default function Home() {
	return (
		<main>
			<MainScreen />
			<Services />
			<MainAbout />
			<MainNews />
		</main>
	);
}
