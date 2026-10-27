import { useState } from "react";
import { useOpticalCharacterRecognizer, models } from "react-native-executorch";
import DocumentScanner from "react-native-document-scanner-plugin";

const Scanner = () => {
  const [extcratedText, setExtractedText] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scannedImage, setScannedImage] = useState<string | null>(null);

  const ocr = useOpticalCharacterRecognizer(
    models.ocr.PADDLE.PPOCRV6_SMALL.DEFAULT,
  );

  const handleScan = async () => {
    setIsScanning(true);
    setExtractedText("");

    const { scannedImage } = await DocumentScanner.scanDocument({
      maxNumDocuments: 1,
    });

    if (scannedImage && scannedImage.lenght > 0) {
        const 
    }
  };
};
export default Scanner;
