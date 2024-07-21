import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Head from "next/head";
import Common from '@/components/Common';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tesla Hi-Tech 3T MRI Amazing & Diagnostic Center",
  description: "Pune's most trusted destination for state-of-the-art diagnostic imaging services. Nestled in the heart of the city, our clinic is dedicated to delivering unparalleled accuracy and comprehensive care. With a focus on advanced technologies like our high-resolution 3T MRI and 32-slice CT scans and more, we ensure precise diagnoses and tailored treatment plans. At Tesla Hi-Tech, our commitment extends beyond technology; our experienced team of radiologists and medical professionals strive to provide compassionate service and support throughout your healthcare journey. Experience the difference at Tesla Hi-Tech, where innovation meets excellence for your health and well-being.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>{metadata.title}</title>
      </Head>

      <body className={inter.className}>
        {children}
      </body>

    </html>
  );
}
