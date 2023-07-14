# Vite Three.js Hausaufgabe

Dieses Projekt ist eine kleine 3D-Szene, die mit Three.js erstellt wurde. Ich erstelle eine Szene mit mehreren Modellen und einfacher Animation. Dabei verwenden ich den GLTFLoader zum Laden von Modellen in meiner Szene und die OrbitControls zur Steuerung der Kameraansicht mittels Maus. 

## Funktionen
* 3D-Modelle, die mit GLTFLoader geladen werden
* Partikelsystem für dynamische visuelle Effekte
* Punktbasierte Beleuchtung
* Kamerasteuerung mit OrbitControls
* Szenen- und Modell-Animationen

## Herausforderungen:


Die Entwicklung eines Projekts stellte für mich eine besonders herausfordernde Aufgabe dar. Anfangs war ich bestrebt, das Projekt mit WebGL nachzubilden. Nach Vollendung dieser Arbeit wurde mir allerdings bewusst, dass diese Aufgabe wohl zu simpel gewesen sein könnte. Der Vergleich mit WebGL ließ erkennen, dass meine Ausführung deutlich einfacher gestaltet war, was mich zu der Erkenntnis führte, dass sie wahrscheinlich nicht ausreichend sein würde.

Mein ursprünglicher Plan sah vor, einen Phong-Shader auf das Baby anzuwenden. Dieser ambitionierte Versuch scheiterte jedoch an den Beschränkungen der genutzten WebGL-Version. Die Komplexität und die Schwierigkeiten, die sich bei der Implementierung dieses Shaders auftaten, überstiegen meine Erwartungen bei weitem. Es ergab sich ein Problem bei der Initialisierung eines Codeabschnitts zu Beginn des Prozesses, was zur Unfähigkeit der Version führte, korrekt zu funktionieren. Darüber hinaus gab es auch Missverständnisse bei der Übergabe, was mich dazu veranlasste, den Einsatz des Phong-Shaders aufzugeben.

Angesichts dieser Umstände entschied ich mich für einen alternativen Ansatz. Ich konzentrierte meine Bemühungen auf die Arbeit mit Partikeleffekten, Schatten und verschiedenen Modellen. Dies ermöglichte es mir, meinen Fokus auf Aspekte zu legen, die sowohl interessant als auch durchführbar waren. Durch diese Neuausrichtung konnte ich das Projekt erfolgreich zu einem befriedigenden Abschluss bringen.


## Projekt-Setup und Installation

Stellen Sie zunächst sicher, dass Node.js auf Ihrem lokalen Rechner installiert ist. Wenn nicht, laden Sie es von [hier](https://nodejs.org/en/download/) herunter.

Installieren Sie die erforderlichen Abhängigkeiten:

npm install

Um das Projekt zu starten, verwenden Sie den folgenden Befehl:

npm run dev

Navigieren Sie jetzt in Ihrem Browser zu `http://localhost:5173`, um das Projekt anzusehen.

## Credits:

"Baby Waiting For Birth" (https://sketchfab.com/3d-models/baby-waiting-for-birth-c305a5c46eb34fa8ba5f0226a031cef7) by 3D-Skanning (https://sketchfab.com/3D-skanning) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)

"Praying Woman 2" (https://sketchfab.com/3d-models/praying-woman-2-6af266693f3c47eba4bcaf0d92f92f0b) by rfrick (https://sketchfab.com/rfrick) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)

"Shiba" (https://sketchfab.com/3d-models/shiba-faef9fe5ace445e7b2989d1c1ece361c) by zixisun02 (https://sketchfab.com/zixisun51) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)

"Sidewalk" (https://sketchfab.com/3d-models/sidewalk-086cb3041cfa4e21a80a93dcfdfe8a9f) by Kadre (https://sketchfab.com/Kadre) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)

"[Extracted] Minecraft Java Edition's Stars" (https://sketchfab.com/3d-models/extracted-minecraft-java-editions-stars-c8868b7ffc4a473eb5cd9203a59e3650) by AjaxGb (https://sketchfab.com/ajaxgb) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
