/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

import { avatarDB, getThumbnail } from "../../utils";

const {
	FreeCodeCamp,
	Edureka,
	Intellipaat,
	TechWiser,
	Fireship,
	TheLinuxExperiment,
	ChrisTitusTech,
	LinuxScoop,
	DistroTube,
} = avatarDB;

export const videos = [
	{
		_id: "ROjZy1WbCIA",
		videoLink: "https://www.youtube.com/watch?v=ROjZy1WbCIA",
		creatorAvatar: FreeCodeCamp,
		thumbnail: getThumbnail("ROjZy1WbCIA"),
		title: "Linux Operating System - Crash Course for Beginners",
		views: "160k",
		cartgory: "Tutorial",
		description:
			"Learn the basics of the Linux Operating System in this crash course for beginners. Linux is a clone of the UNIX operating system, so understanding one is understanding the other. The goal is for you to get a full understanding of how the Linux OS works. If you're still using Windows or Mac OS, you can still learn Linux using a virtual machine.",
		creator: "FreeCodeCamp.org",
	},
	{
		_id: "Wgi-OfbP2Gw",
		videoLink: "https://www.youtube.com/watch?v=Wgi-OfbP2Gw",
		creatorAvatar: Edureka,
		thumbnail: getThumbnail("Wgi-OfbP2Gw"),
		title: "Linux Tutorial For Beginners | Linux Training | Edureka",
		views: "100k",
		cartgory: "Tutorial",
		description:
			"This Edureka Linux Full Course video will help you understand and learn the fundamentals of Operating Systems and Linux in Particular. This Linux Tutorial is ideal for both beginners as well as professionals who want to master the fundamentals of Linux. Below are the topics covered in this Linux Tutorial for Beginners.",
		creator: "edureka!",
	},
	{
		_id: "lZAoFs75_cs",
		videoLink: "https://www.youtube.com/watch?v=lZAoFs75_cs",
		creatorAvatar: FreeCodeCamp,
		thumbnail: getThumbnail("lZAoFs75_cs"),
		title: "Linux for Ethical Hackers (Kali Linux Tutorial)",
		views: "1.2M",
		cartgory: "Tutorial",
		description:
			"In this course, you will learn the basics of Kali Linux. The course covers installation, using the terminal / command line, bash scripting, tools and features for ethical hacking, and more. The course focuses on Kali Linux but much of the content applies to other versions of Linux as well.",
		creator: "FreeCodeCamp.org",
	},
	{
		_id: "DKFnqAtEOvc",
		videoLink: "https://www.youtube.com/watch?v=DKFnqAtEOvc",
		creatorAvatar: ChrisTitusTech,
		thumbnail: getThumbnail("DKFnqAtEOvc"),
		title: "Which Linux Distribution? | Understanding Linux Distros",
		views: "276k",
		cartgory: "Distros",
		description: `In this video I go over the timeless question "Which Linux Distribution should I choose?" that haunts us Linux users. I'm going to try and demystify this so you can get to understanding Linux Distros. `,
		creator: "Chris Titus Tech",
	},
	{
		_id: "aaEoyVIowk8",
		videoLink: "https://www.youtube.com/watch?v=aaEoyVIowk8",
		creatorAvatar: Intellipaat,
		thumbnail: getThumbnail("aaEoyVIowk8"),
		title: "Linux Administration Tutorial | Linux Tutorial | Intellipaat",
		views: "333k",
		cartgory: "Tutorial",
		description:
			"In this Linux Administration Tutorial video, you will learn what is Linux, how to install Linux, how to setup kernel parameters, how to install & remove software, RPM in Linux, various commands in Linux, and various Linux services & systems in detail.",
		creator: "Intellipaat",
	},
	{
		_id: "rrB13utjYV4",
		videoLink: "https://www.youtube.com/watch?v=rrB13utjYV4",
		creatorAvatar: Fireship,
		thumbnail: getThumbnail("rrB13utjYV4"),
		title: "Linux in 100 Seconds | Fireship",
		views: "333k",
		cartgory: "Tutorial",
		description:
			"Linux is a free and open-source operating system that powers many of the world's computer systems. Learn the basics of the Linux kernel, how it relates to GNU, and essential Linux commands.",
		creator: "Fireship",
	},
	{
		_id: "exQh0_JKBJQ",
		videoLink: "https://www.youtube.com/watch?v=exQh0_JKBJQ",
		creatorAvatar: LinuxScoop,
		thumbnail: getThumbnail("exQh0_JKBJQ"),
		title: "Make Your KDE Plasma Desktop Look Better",
		views: "362k",
		cartgory: "Customization",
		description:
			"This video shown step by step how to customize your KDE plasma desktop to look better. In this video, I use Manjaro Linux with the KDE plasma 5.20 series. This tutorial also works on Linux Distribution which using KDE Plasma Desktop such as KDE Neon, Kubuntu, OpenSUSE, KaOS, Netrunner, Chakra, Debian KDE flavor, Fedora KDE Spin, Arch with KDE plasma. ",
		creator: "LinuxScoop",
	},
	{
		_id: "S--4XU7Z0T8",
		videoLink: "https://www.youtube.com/watch?v=S--4XU7Z0T8",
		creatorAvatar: TechWiser,
		thumbnail: getThumbnail("S--4XU7Z0T8"),
		title: "Best Linux Distributions - Noobs Guide",
		views: "287k",
		cartgory: "Distros",
		description: "Best linux ditros to choose from a noob user.",
		creator: "TechWiser",
	},
	{
		_id: "ShcR4Zfc6Dw",
		videoLink: "https://www.youtube.com/watch?v=ShcR4Zfc6Dw",
		creatorAvatar: Fireship,
		thumbnail: getThumbnail("ShcR4Zfc6Dw"),
		title: "Why so many distros? The Weird History of Linux",
		views: "656k",
		cartgory: "Distros",
		description:
			"Why are there so many Linux distros? Take a brief journey through the history of Linux to understand hundreds of different distros exist today.",
		creator: "Fireship",
	},
	{
		_id: "npn8ZktlKEs",
		videoLink: "https://www.youtube.com/watch?v=npn8ZktlKEs",
		creatorAvatar: LinuxScoop,
		thumbnail: getThumbnail("npn8ZktlKEs"),
		title: "Give Your Cinnamon Desktop Fresh And Elegant Look With Orchis GTK Theme",
		views: "122k",
		cartgory: "Customization",
		description:
			"Hi everyone. In this video I’am going to show you how to customize cinnamon desktop fresh and elegant look with orchis theme. this customize using Linux Mint with Cinnamon Desktop 5.0 series.",
		creator: "LinuxScoop",
	},
	{
		_id: "pNWDnJ_kESM",
		videoLink: "https://www.youtube.com/watch?v=pNWDnJ_kESM",
		creatorAvatar: TheLinuxExperiment,
		thumbnail: getThumbnail("pNWDnJ_kESM"),
		title: "IS LINUX MINT 20.3 still the BEST LINUX DISTRO for BEGINNERS?",
		views: "58k",
		cartgory: "Distros",
		description: `Mint is not just a distro for beginners...but the distro to use if one cares about many things just working out of the box.`,
		creator: "The Linux Enter",
	},
	{
		_id: "ITop66jnk2A",
		videoLink: "https://www.youtube.com/watch?v=ITop66jnk2A",
		creatorAvatar: LinuxScoop,
		thumbnail: getThumbnail("ITop66jnk2A"),
		title: "11 Most Beautiful Linux Distribution in 2022",
		views: "72k",
		cartgory: "Distros",
		description: "11 Most Beautiful Linux Distribution in 2022",
		creator: "LinuxScoop",
	},
	{
		_id: "TKX29fJ8U2Y",
		videoLink: "https://www.youtube.com/watch?v=TKX29fJ8U2Y",
		creatorAvatar: DistroTube,
		thumbnail: getThumbnail("TKX29fJ8U2Y"),
		title: "From Noob To Power User With Linux Mint Cinnamon",
		views: "172k",
		cartgory: "Distros",
		description:
			"In this lengthy video, I go over some of the changes I would make in Linux Mint if I were using it as my daily driver.  I don't make drastic changes.  I just tweak some of the tools that are already there.",
		creator: "Distro Tube",
	},
];
