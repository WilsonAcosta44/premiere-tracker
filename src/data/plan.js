// Adobe Certified Professional — Digital Video Using Adobe Premiere Pro
// 51 tasks across 3 phases | May 24 – August 19, 2026 | ~7 hrs/week
// Task IDs are stable — do not change them (used as localStorage keys).

const PLAN = {
  phases: [

    // ─────────────────────────────────────────────────────────────────────────
    // PHASE 1 — Quick Start (Weeks 1–3, 11 tasks)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'phase-1',
      number: 1,
      title: 'Quick Start',
      duration: 'Weeks 1–3',
      length: '3 weeks',
      hoursPerWeek: '~7 hrs/week',
      goal:
        'Jump back into Premiere Pro without review fatigue. You already know how this software works — this phase is about getting your hands moving again and finishing something real. By end of week 3 you\'ll have a completed, exported short video.',
      checkpoint:
        'Can you open Premiere, create a sequence, cut clips to music, add a title card, and export a clean MP4 — without looking anything up? If yes, move to Phase 2. If any of those feel shaky, spend another few days on the weak spot before moving on.',
      weeks: [
        {
          id: 'p1-w01',
          title: 'Week 1–2: Interface Re-Orientation & First Assembly',
          hours: '~14 hrs (1 hr/day)',
          tasks: [
            {
              id: 'p1-w01-t1',
              type: 'practice',
              text: 'Spend 30 minutes clicking through every panel in Premiere Pro: Source Monitor, Program Monitor, Timeline, Project Panel, Effects, Effect Controls, Audio Track Mixer. Don\'t watch tutorials yet — just open things, drag things, close things. Get your hands moving again.',
              steps: [
                { id: 'p1-w01-t1-s1', text: 'Source Monitor: double-click any clip in the Project Panel to load it here; note the In/Out controls and transport buttons at the bottom' },
                { id: 'p1-w01-t1-s2', text: 'Program Monitor: find the zoom %, safe margins button, and the Export Frame button (camera icon); try scrubbing the playhead' },
                { id: 'p1-w01-t1-s3', text: 'Timeline: drag the divider between the video and audio sections taller; right-click a track header to add a new video or audio track' },
                { id: 'p1-w01-t1-s4', text: 'Project Panel: switch between List View and Icon View using the icons at the bottom-left; try the search bar' },
                { id: 'p1-w01-t1-s5', text: 'Effects panel (Shift+7): notice it\'s split into Video Effects, Audio Effects, Presets, and Lumetri Presets — browse the folders' },
                { id: 'p1-w01-t1-s6', text: 'Effect Controls (Shift+5): click a clip in the timeline and see its fixed effects — Motion, Opacity, and Time Remapping are always there' },
                { id: 'p1-w01-t1-s7', text: 'Audio Track Mixer (Shift+6): notice the faders and pan knobs for each track; this is where you mix in real time' },
              ],
            },
            {
              id: 'p1-w01-t2',
              type: 'practice',
              text: 'Drill the core keyboard shortcuts until they\'re automatic: J/K/L for playback (rewind/pause/play), comma/period for insert/overwrite edits, Q/W to ripple-trim to the playhead, and C to razor. Write a cheat sheet and tape it next to your monitor for the first week.',
              links: [
                { label: 'Adobe keyboard shortcuts reference', url: 'https://helpx.adobe.com/premiere-pro/using/keyboard-shortcuts.html' },
              ],
              steps: [
                { id: 'p1-w01-t2-s1', text: 'Press J once (rewind), twice (2×), three times (3×) — notice the speed multiplier; K stops playback at any speed' },
                { id: 'p1-w01-t2-s2', text: 'Hold K while pressing J or L to scrub in slow motion — this is how you find an exact cut frame' },
                { id: 'p1-w01-t2-s3', text: 'Put the playhead before a clip\'s out-point, select the clip, press Q — it ripple-trims the tail back to the playhead' },
                { id: 'p1-w01-t2-s4', text: 'Put the playhead after a clip\'s in-point, select the clip, press W — it ripple-trims the head forward to the playhead' },
                { id: 'p1-w01-t2-s5', text: 'Press C to activate the Razor, click a cut point on a clip; press V to return to the Selection tool' },
                { id: 'p1-w01-t2-s6', text: 'Add a clip to the timeline via Source Monitor: load a clip, set In/Out, then press comma (insert) — undo, then press period (overwrite) — notice the difference', substeps: ['Insert: downstream clips shift right to make room', 'Overwrite: existing footage gets replaced in place'] },
              ],
            },
            {
              id: 'p1-w01-t3',
              type: 'practice',
              text: 'Create a new project and a 1920×1080, 29.97fps sequence. Import 5–10 video clips — use your phone videos, a short movie scene, YouTube-downloaded clips, or anything you have. Organize them into one bin named after the project.',
              steps: [
                { id: 'p1-w01-t3-s1', text: 'File > New > Project — name it and choose a local folder; leave codec settings at defaults' },
                { id: 'p1-w01-t3-s2', text: 'File > New > Sequence — in Presets, open AVCHD > 1080p > AVCHD 1080p 29.97 (or Digital SLR > 1080p > DSLR 1080p30)' },
                { id: 'p1-w01-t3-s3', text: 'Verify: Sequence > Sequence Settings should show Frame Size 1920×1080, Timebase 29.97 fps' },
                { id: 'p1-w01-t3-s4', text: 'Create a bin: right-click in Project Panel > New Bin — name it after your project' },
                { id: 'p1-w01-t3-s5', text: 'Import clips: File > Import (Ctrl+I / Cmd+I) and select your media; drag all imported clips into your new bin' },
              ],
            },
            {
              id: 'p1-w01-t4',
              type: 'project',
              text: 'Build your first rough cut: drag clips to the timeline and assemble a 60–90 second edit. Use J/K/L and Q/W for everything — avoid the razor tool. It doesn\'t need to be good. Getting to the end matters more than getting it right on the first pass.',
              steps: [
                { id: 'p1-w01-t4-s1', text: 'Double-click a clip in the Project Panel to load it into the Source Monitor' },
                { id: 'p1-w01-t4-s2', text: 'Mark In (I) and Out (O) to select the section you want; press period (.) to overwrite it into the timeline' },
                { id: 'p1-w01-t4-s3', text: 'Repeat for each clip — work through all of your footage in rough order without stopping to fix anything' },
                { id: 'p1-w01-t4-s4', text: 'Use J/K/L to scrub through the assembly; use Q/W to trim obvious loose ends', substeps: ['Q trims the head of a selected clip back to the playhead', 'W trims the tail of a selected clip forward to the playhead'] },
                { id: 'p1-w01-t4-s5', text: 'Keep going until every clip is placed — a messy 90-second assembly beats a polished 10-second snippet' },
              ],
            },
            {
              id: 'p1-w01-t5',
              type: 'practice',
              text: 'Practice the four trim tools: Ripple Edit (B), Rolling Edit (N), Slip (Y), and Slide (U). Open the Trim Monitor (Sequence > Trim Edit) and use each one on your rough cut for at least 10 minutes. Understand what each tool changes before moving on.',
              links: [
                { label: 'Adobe: Trim tools overview', url: 'https://helpx.adobe.com/premiere-pro/using/trimming-clips1.html' },
              ],
              steps: [
                { id: 'p1-w01-t5-s1', text: 'Ripple Edit (B): drag the edge of a clip — adjacent clips shift to close the gap; total sequence length changes' },
                { id: 'p1-w01-t5-s2', text: 'Rolling Edit (N): drag the cut between two clips — both clips adjust but total sequence duration stays the same' },
                { id: 'p1-w01-t5-s3', text: 'Slip (Y): drag inside a clip — the in/out content shifts without moving the clip in the timeline' },
                { id: 'p1-w01-t5-s4', text: 'Slide (U): drag the clip itself — it moves in the timeline; neighboring clips shrink or grow to compensate' },
                { id: 'p1-w01-t5-s5', text: 'For each tool: do 5 edits and predict the outcome before you drag — if you\'re surprised, do 5 more', substeps: ['Ripple: sequence gets shorter or longer', 'Rolling: sequence length never changes', 'Slip: clip length stays the same; content inside shifts', 'Slide: clip moves; neighbors adjust'] },
              ],
            },
            {
              id: 'p1-w01-t6',
              type: 'practice',
              text: 'Use the Source Monitor to set In and Out points on at least 5 clips before placing them in the timeline. Mark your In point with I and Out point with O, then use comma (insert) or period (overwrite) to send them to the timeline. This is how professional editors work.',
              steps: [
                { id: 'p1-w01-t6-s1', text: 'Double-click a clip in the Project Panel to load it in the Source Monitor' },
                { id: 'p1-w01-t6-s2', text: 'Scrub to the moment you want the clip to start; press I to mark In' },
                { id: 'p1-w01-t6-s3', text: 'Scrub to the moment you want the clip to end; press O to mark Out' },
                { id: 'p1-w01-t6-s4', text: 'Position the timeline playhead where you want the clip to land' },
                { id: 'p1-w01-t6-s5', text: 'Press comma (,) for insert edit — downstream clips shift right to make room' },
                { id: 'p1-w01-t6-s6', text: 'Press period (.) for overwrite edit — existing footage at the playhead gets replaced' },
                { id: 'p1-w01-t6-s7', text: 'Repeat for all 5 clips; compare insert vs. overwrite side by side — know when to use each' },
              ],
            },
          ],
          notes: 'J/K/L are the three fastest keys in editing. J = rewind, K = pause, L = play forward. Hold K while tapping J or L to play in slow motion — great for finding exact cut points. You\'ll use these every single session.',
        },
        {
          id: 'p1-w02',
          title: 'Week 3: Transitions, Titles, Audio & Export',
          hours: '~7 hrs (1 hr/day)',
          tasks: [
            {
              id: 'p1-w02-t1',
              type: 'practice',
              text: 'Add two transitions to your rough cut: a Cross Dissolve between two clips and a Dip to Black at the very end. Find them in Effects > Video Transitions > Dissolve. Drag them to a cut point. Right-click a transition to adjust its duration.',
              steps: [
                { id: 'p1-w02-t1-s1', text: 'In the Effects panel (Shift+7), open Video Transitions > Dissolve > Cross Dissolve' },
                { id: 'p1-w02-t1-s2', text: 'Drag Cross Dissolve to a cut point between two clips — drop it centered on the cut line' },
                { id: 'p1-w02-t1-s3', text: 'Right-click the transition > Set Transition Duration — change to 20 frames (~2/3 second at 30fps)' },
                { id: 'p1-w02-t1-s4', text: 'Find Video Transitions > Dissolve > Dip to Black; drag it to the out-point of the very last clip' },
                { id: 'p1-w02-t1-s5', text: 'Play through both transitions — if a transition appears gray, extend the clip to add handle frames' },
              ],
            },
            {
              id: 'p1-w02-t2',
              type: 'practice',
              text: 'Add a title using the Essential Graphics panel (Window > Essential Graphics > New Layer > Text). Type your title, choose a font, set the size and color. Reposition it on screen. This is just a first pass — you\'ll go deep on graphics in Phase 2.',
              steps: [
                { id: 'p1-w02-t2-s1', text: 'Window > Essential Graphics to open the panel (or Shift+7 then click the Essential Graphics tab)' },
                { id: 'p1-w02-t2-s2', text: 'In the Program Monitor, press T to activate the Type tool; click anywhere on the frame and type your title' },
                { id: 'p1-w02-t2-s3', text: 'Press Escape to exit text editing; in the Essential Graphics > Edit tab, change font, size (try 72–96pt), and color' },
                { id: 'p1-w02-t2-s4', text: 'Use the Align and Transform controls to center the title horizontally; drag it vertically to your preferred position' },
                { id: 'p1-w02-t2-s5', text: 'In the timeline, drag the title clip to sit over the correct section of your video' },
              ],
            },
            {
              id: 'p1-w02-t3',
              type: 'practice',
              text: 'Import a music track and add it to an audio track on the timeline. Use the rubber band (the thin line on the audio clip) to set the volume level. Add keyframes at the start and end of the clip to fade the music in and fade it out. Aim for a smooth, not abrupt, fade.',
              steps: [
                { id: 'p1-w02-t3-s1', text: 'File > Import (Ctrl+I) and select your MP3 or WAV music file' },
                { id: 'p1-w02-t3-s2', text: 'Drag the audio clip to an empty audio track (A2 or lower, below your video\'s audio)' },
                { id: 'p1-w02-t3-s3', text: 'Right-click the music clip > Show Clip Keyframes > Volume > Level to see the rubber-band line' },
                { id: 'p1-w02-t3-s4', text: 'Hover over the yellow rubber-band at the clip\'s start — a small pen appears; click to add a keyframe at 0:00 and another 1 second in' },
                { id: 'p1-w02-t3-s5', text: 'Drag the first keyframe all the way down to -∞ (silence) to create the fade-in' },
                { id: 'p1-w02-t3-s6', text: 'Repeat at the end: add two keyframes in the last 2 seconds, dragging the final one down to -∞ for the fade-out' },
              ],
            },
            {
              id: 'p1-w02-t4',
              type: 'practice',
              text: 'Apply a quick color look to give your video a feel: open Window > Lumetri Color, go to the Creative tab, and browse the Look dropdown. Pick one that fits. You\'re not color grading yet — just getting comfortable with the panel location and basic controls.',
              steps: [
                { id: 'p1-w02-t4-s1', text: 'Window > Lumetri Color to open the panel; dock it wherever is convenient' },
                { id: 'p1-w02-t4-s2', text: 'Click on a video clip in the timeline to select it (Lumetri Color always applies to the selected clip)' },
                { id: 'p1-w02-t4-s3', text: 'Click the Creative tab inside Lumetri Color; click the Look dropdown and browse the list' },
                { id: 'p1-w02-t4-s4', text: 'Hover over 3–5 different looks — you can see them previewed on your clip in the Program Monitor' },
                { id: 'p1-w02-t4-s5', text: 'Click one to apply; toggle the Lumetri Color effect on/off using the fx checkbox on the clip to compare before/after' },
              ],
            },
            {
              id: 'p1-w02-t5',
              type: 'project',
              text: 'Export your Phase 1 mini-project: File > Export > Media > Format: H.264 > Preset: YouTube 1080p Full HD > Export. Watch the finished MP4 file all the way through. Write down in the Notes box below: what you like, what bugs you, and one thing you\'d fix next time.',
              steps: [
                { id: 'p1-w02-t5-s1', text: 'Make sure the correct sequence is open and active in the timeline' },
                { id: 'p1-w02-t5-s2', text: 'File > Export > Media (Ctrl+M / Cmd+M) — the Export Settings dialog opens' },
                { id: 'p1-w02-t5-s3', text: 'Set Format to H.264; set Preset to YouTube 1080p Full HD' },
                { id: 'p1-w02-t5-s4', text: 'Click Output Name to choose where to save the file — pick your Exports folder' },
                { id: 'p1-w02-t5-s5', text: 'Click Export; watch the progress bar until it says "Encoding Complete"' },
                { id: 'p1-w02-t5-s6', text: 'Open the exported MP4 in your system media player and watch it all the way through; write your notes below' },
              ],
            },
          ],
          notes: 'A rough cut that gets exported beats a perfect cut that never ships. The whole point of Phase 1 is finishing something — not getting it perfect. You\'ll have two more projects in Phase 2 to apply what you\'ve learned.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // PHASE 2 — Certification Skills (Weeks 4–10, 28 tasks)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'phase-2',
      number: 2,
      title: 'Certification Skills',
      duration: 'Weeks 4–10',
      length: '7 weeks',
      hoursPerWeek: '~7 hrs/week',
      goal:
        'Systematically build the skills the Adobe Certified Professional exam tests — all six domains, all major features. Every section gets real hands-on practice, not just exposure. By the end you\'ll have two more polished videos and genuine command of every major Premiere Pro tool.',
      checkpoint:
        'Can you explain what each Lumetri scope shows, name all four trim tools and what each one does, mix audio using the Essential Sound panel, and export different presets for YouTube vs. Instagram — without looking anything up? If yes, move to Phase 3.',
      weeks: [
        {
          id: 'p2-w01',
          title: 'Week 4–5: Video Theory & Interface Mastery (Domains 1 & 2)',
          hours: '~14 hrs',
          tasks: [
            {
              id: 'p2-w01-t1',
              type: 'watch',
              text: 'Frame rates: 24fps looks cinematic (movies), 30fps looks like TV and YouTube, 60fps is smooth for sports and gaming. Search "24fps vs 30fps vs 60fps comparison" on YouTube and watch a short side-by-side comparison — seeing it is better than reading about it. Then check what frame rate you\'ve been editing in.',
              steps: [
                { id: 'p2-w01-t1-s1', text: 'Search YouTube for "24fps vs 30fps vs 60fps comparison" and watch one side-by-side video (aim for under 10 min)' },
                { id: 'p2-w01-t1-s2', text: 'Check what frame rate you\'ve been editing in: open Sequence > Sequence Settings and read the Timebase field' },
                { id: 'p2-w01-t1-s3', text: 'Write a one-liner for each rate: 24fps = _____, 30fps = _____, 60fps = _____', substeps: ['24fps: cinematic, film look — used in movies and drama', '30fps: "video" look — standard for YouTube, TV, news', '60fps: ultra-smooth — sports, gaming, slow-motion source footage'] },
                { id: 'p2-w01-t1-s4', text: 'Know for the exam: always match your sequence frame rate to your source footage to avoid motion artifacts' },
              ],
            },
            {
              id: 'p2-w01-t2',
              type: 'watch',
              text: 'Codecs vs. containers — this comes up on the exam. A container (MP4, MOV, MXF) is the file wrapper. A codec (H.264, ProRes, DNxHD) is how the video is compressed inside the container. H.264 is small and good for sharing online; ProRes is large and good for editing quality. Watch one short video on this distinction.',
              links: [
                { label: 'Adobe: Supported file formats', url: 'https://helpx.adobe.com/premiere-pro/using/supported-file-formats.html' },
              ],
              steps: [
                { id: 'p2-w01-t2-s1', text: 'Search YouTube "codec vs container explained" — watch one short video (under 10 min)' },
                { id: 'p2-w01-t2-s2', text: 'List three containers and what codec(s) they typically wrap: MP4 (H.264/H.265), MOV (ProRes/H.264), MXF (DNxHD/XDCAM)' },
                { id: 'p2-w01-t2-s3', text: 'Know the exam answer: H.264 = web delivery (small file); ProRes/DNxHD = editing and broadcast (large, high-quality)' },
                { id: 'p2-w01-t2-s4', text: 'Bonus: check what codec your phone video uses — right-click a clip in Premiere, choose Properties, and read the Video Codec field' },
              ],
            },
            {
              id: 'p2-w01-t3',
              type: 'review',
              text: 'Copyright for video creators: understand Creative Commons licenses (CC0, CC BY, CC BY-NC), "all rights reserved," and public domain. Know why you can\'t use random YouTube music — and where to find music and footage you CAN use: Pexels, Pixabay, Mixkit, and ccMixter. Bookmark at least two of these.',
              links: [
                { label: 'Mixkit — free video and music', url: 'https://mixkit.co' },
                { label: 'Pexels — free stock footage', url: 'https://www.pexels.com/videos/' },
                { label: 'ccMixter — Creative Commons music', url: 'https://ccmixter.org' },
              ],
              steps: [
                { id: 'p2-w01-t3-s1', text: 'Learn the key Creative Commons licenses: CC0 (public domain — use for anything), CC BY (attribution required), CC BY-NC (no commercial use)' },
                { id: 'p2-w01-t3-s2', text: 'Know why you can\'t use random YouTube music: it\'s "all rights reserved" by default — YouTube Content ID will flag or block your video' },
                { id: 'p2-w01-t3-s3', text: 'Bookmark at least two free sources now: Mixkit, Pexels, ccMixter, or Pixabay — you\'ll need them for your capstone' },
                { id: 'p2-w01-t3-s4', text: 'Exam note: "public domain" means copyright has expired or was never claimed — you can use it for any purpose, commercial or not' },
              ],
            },
            {
              id: 'p2-w01-t4',
              type: 'practice',
              text: 'Customize your Premiere workspace: rearrange panels so your Timeline is taller, move the Effect Controls panel somewhere convenient, and close any panels you never use. Save it under Window > Workspaces > Save as New Workspace. Name it something you\'ll recognize.',
              steps: [
                { id: 'p2-w01-t4-s1', text: 'Drag the horizontal divider between the top panels and the Timeline downward to give the timeline more vertical space' },
                { id: 'p2-w01-t4-s2', text: 'Drag the Effect Controls panel tab to dock it next to the Source Monitor (top row) — this is the most common editor layout' },
                { id: 'p2-w01-t4-s3', text: 'Close any panels you never use: right-click the panel tab > Close Panel (Audio Track Mixer, Metadata, and Libraries are common candidates)' },
                { id: 'p2-w01-t4-s4', text: 'Window > Workspaces > Save as New Workspace — name it "My Edit Workspace"' },
                { id: 'p2-w01-t4-s5', text: 'Test it: Window > Workspaces > Reset to Saved Layout — verify it restores your custom layout correctly' },
              ],
            },
            {
              id: 'p2-w01-t5',
              type: 'practice',
              text: 'Customize keyboard shortcuts: open Edit > Keyboard Shortcuts and change at least 3 shortcuts to keys that feel natural to you. Top editors customize their shortcuts heavily. Even small changes — like moving a command to your left hand — add up to real time savings over a long edit.',
              steps: [
                { id: 'p2-w01-t5-s1', text: 'Edit > Keyboard Shortcuts (Ctrl+Alt+K / Cmd+Option+K) to open the shortcut editor' },
                { id: 'p2-w01-t5-s2', text: 'Search for commands you use often: "Add Edit," "Ripple Delete," "Match Frame" — assign each to a convenient key' },
                { id: 'p2-w01-t5-s3', text: 'Learn what Match Frame does: press F to jump the Source Monitor to the exact frame under the playhead in the timeline', substeps: ['Match Frame is essential for finding the source clip for a cut you already made', 'It\'s a common exam topic — know it by name and shortcut'] },
                { id: 'p2-w01-t5-s4', text: 'Export your shortcut preset: in the Keyboard Shortcuts dialog, click Save As — name it "My Shortcuts"' },
              ],
            },
            {
              id: 'p2-w01-t6',
              type: 'practice',
              text: 'Proxy workflow: right-click a high-resolution clip in the Project panel and choose Proxy > Create Proxies (use any low-res preset). Then toggle the proxy button in the Program Monitor to switch between proxy and full-res. Understand why this matters when editing 4K on a slow laptop.',
              links: [
                { label: 'Adobe: Working with proxies', url: 'https://helpx.adobe.com/premiere-pro/using/working-with-proxies.html' },
              ],
              steps: [
                { id: 'p2-w01-t6-s1', text: 'In the Project Panel, right-click a large video clip > Proxy > Create Proxies' },
                { id: 'p2-w01-t6-s2', text: 'Choose a low-res preset (H.264 Low Resolution or GoPro CineForm Low Res 1280×720); click OK — proxies render in the background' },
                { id: 'p2-w01-t6-s3', text: 'In the Program Monitor, click the wrench icon (Settings) > Toggle Proxies — scrub through your clip; it should be smoother' },
                { id: 'p2-w01-t6-s4', text: 'Toggle proxies off before exporting — Premiere automatically switches back to the original full-res files at export time', substeps: ['Proxies are edit aids only — your exported video always uses the original media'] },
              ],
            },
            {
              id: 'p2-w01-t7',
              type: 'review',
              text: 'Domain 1 & 2 self-quiz — answer these without looking anything up: (1) What\'s the difference between H.264 and ProRes? (2) What does 29.97fps mean? (3) What is a sequence preset and why does it matter? (4) How do you import using the Media Browser vs. File > Import? If you can\'t answer all four, revisit the relevant tasks above.',
              steps: [
                { id: 'p2-w01-t7-s1', text: 'Write your answer to Q1: H.264 vs. ProRes — format, file size, and when to use each', substeps: ['H.264: compressed for delivery, small file size, fine for web output', 'ProRes: large high-quality editing codec, smooth timeline playback, use for mastering'] },
                { id: 'p2-w01-t7-s2', text: 'Write your answer to Q2: What does 29.97fps mean? (NTSC TV standard — originally tied to color signal frequency)' },
                { id: 'p2-w01-t7-s3', text: 'Write your answer to Q3: What is a sequence preset and why match it to your footage?' },
                { id: 'p2-w01-t7-s4', text: 'Write your answer to Q4: Media Browser vs. File > Import — what\'s the key difference?' },
                { id: 'p2-w01-t7-s5', text: 'Check your answers; re-read any task where an answer felt shaky' },
              ],
            },
          ],
          notes: 'Resource: Adobe\'s official Premiere Pro tutorial page at helpx.adobe.com/premiere-pro/tutorials.html is free and accurate — use it to look things up when you get stuck. For video theory topics like codecs and frame rates, short YouTube explainers (under 10 min) are faster than reading articles.',
        },
        {
          id: 'p2-w02',
          title: 'Week 6–7: Advanced Editing & Organization (Domains 3 & 4)',
          hours: '~14 hrs',
          tasks: [
            {
              id: 'p2-w02-t1',
              type: 'practice',
              text: 'Organization deep dive: create a new project and build a proper bin structure before touching the timeline. Make bins for Footage, Audio, Graphics, and Exports. Add sub-bins for each camera angle or shooting day. Apply color labels: green for selects, red for unusable, yellow for maybe.',
              steps: [
                { id: 'p2-w02-t1-s1', text: 'File > New > Project — name it "Organization Practice"' },
                { id: 'p2-w02-t1-s2', text: 'Create 4 top-level bins: Footage, Audio, Graphics, Exports (right-click in Project Panel > New Bin)' },
                { id: 'p2-w02-t1-s3', text: 'Inside Footage, create sub-bins: Camera A, Camera B (or Day 1, Day 2)' },
                { id: 'p2-w02-t1-s4', text: 'Import at least 6 clips; drag them into the correct sub-bins' },
                { id: 'p2-w02-t1-s5', text: 'Apply color labels: right-click a clip > Label > green for selects, red for unusable, yellow for maybe' },
                { id: 'p2-w02-t1-s6', text: 'Switch to Metadata view in the Project Panel and add a note to one clip\'s Description field' },
              ],
            },
            {
              id: 'p2-w02-t2',
              type: 'practice',
              text: 'Log footage with markers: watch your clips in the Source Monitor and press M to drop a marker at every good moment. Name the markers something useful ("good reaction," "best take"). This is how documentary editors work — you build a map before you cut, so you\'re not hunting for moments during the edit.',
              steps: [
                { id: 'p2-w02-t2-s1', text: 'Double-click a clip in the Project Panel to open it in the Source Monitor' },
                { id: 'p2-w02-t2-s2', text: 'Scrub through; every time you find a strong moment, press M to drop a marker at that frame' },
                { id: 'p2-w02-t2-s3', text: 'Double-click a marker in the Source Monitor timeline to name it — use descriptive labels like "best reaction" or "sharp focus"' },
                { id: 'p2-w02-t2-s4', text: 'Repeat for at least 3 different clips until you have a "map" of the best moments in each' },
                { id: 'p2-w02-t2-s5', text: 'In the Project Panel, switch to List View — markers appear as metadata columns you can sort by' },
              ],
            },
            {
              id: 'p2-w02-t3',
              type: 'practice',
              text: 'Master Slip (Y) and Slide (U) edits — these are the trickiest tools and show up on the exam. Slip moves the content of a clip without changing its position or duration. Slide moves the clip\'s position in the timeline without changing its content. Practice on a 5-clip sequence until you can predict exactly what will happen before you do it.',
              links: [
                { label: 'Adobe: Slip and Slide edits', url: 'https://helpx.adobe.com/premiere-pro/using/trimming-clips1.html' },
              ],
              steps: [
                { id: 'p2-w02-t3-s1', text: 'Create a 5-clip sequence: A, B, C, D, E in order on the timeline' },
                { id: 'p2-w02-t3-s2', text: 'Press Y for the Slip tool; drag clip C left and right — C\'s content shifts but its position and duration in the timeline stay fixed' },
                { id: 'p2-w02-t3-s3', text: 'Watch the 4-up display in the Program Monitor: it shows the outgoing and incoming frames of both neighboring clips as you slip' },
                { id: 'p2-w02-t3-s4', text: 'Press U for the Slide tool; drag clip C — it moves in the timeline and clips B and D expand/shrink to fill the gap' },
                { id: 'p2-w02-t3-s5', text: 'Do 5 Slips and 5 Slides, predicting the result before each drag — if you\'re wrong, do 5 more until the prediction is automatic' },
                { id: 'p2-w02-t3-s6', text: 'Memorize the one-sentence difference: Slip = change what\'s inside the clip; Slide = change where the clip sits in the sequence' },
              ],
            },
            {
              id: 'p2-w02-t4',
              type: 'practice',
              text: 'Keyboard-only editing challenge: edit a 90-second sequence and use zero mouse clicks for trimming. Use only Q and W (ripple trim to playhead), comma/period (insert/overwrite), J/K/L (playback), and up/down arrows (jump to next edit point). This is the single best drill for building editing speed.',
              steps: [
                { id: 'p2-w02-t4-s1', text: 'Assemble all clips onto the timeline using Source Monitor + comma/period keys — no drag-and-drop' },
                { id: 'p2-w02-t4-s2', text: 'Play through with L; stop with K; press J to rewind to the previous cut point' },
                { id: 'p2-w02-t4-s3', text: 'Select a clip; put the playhead at the frame where you want to cut; press Q to remove everything before the playhead on that clip' },
                { id: 'p2-w02-t4-s4', text: 'Put the playhead after the start of a clip; press W to remove everything after the playhead on that clip' },
                { id: 'p2-w02-t4-s5', text: 'Navigate between clips using the up/down arrow keys — up goes to the previous cut, down goes to the next cut' },
                { id: 'p2-w02-t4-s6', text: 'Complete the full 90-second edit without touching the razor tool or any mouse trim handle' },
              ],
            },
            {
              id: 'p2-w02-t5',
              type: 'practice',
              text: 'Multi-camera sequence: create a multi-cam sequence from at least 2 video clips. Right-click them in the Project panel, choose Create Multi-Camera Source Sequence, and sync by audio. Switch to the multi-cam view in the Program Monitor and cut between angles in real time using number keys. Multi-cam editing is a key exam topic.',
              links: [
                { label: 'Adobe: Multi-camera editing', url: 'https://helpx.adobe.com/premiere-pro/using/create-multi-camera-source-sequence.html' },
              ],
              steps: [
                { id: 'p2-w02-t5-s1', text: 'Select 2 or more clips with overlapping audio (same event from different angles or sources) in the Project Panel' },
                { id: 'p2-w02-t5-s2', text: 'Right-click > Create Multi-Camera Source Sequence; choose Sync by: Audio' },
                { id: 'p2-w02-t5-s3', text: 'Double-click the resulting nested clip to open it — notice the individual clips are aligned and synced inside' },
                { id: 'p2-w02-t5-s4', text: 'In the Program Monitor, click the wrench (Settings) > Multi-Camera view to see the live camera-switching grid' },
                { id: 'p2-w02-t5-s5', text: 'Press spacebar to play; press 1, 2 (or 3, 4) to switch between cameras in real time — Premiere records your cuts automatically' },
                { id: 'p2-w02-t5-s6', text: 'Stop playback and review your camera cuts in the timeline; trim or adjust any switch points as needed' },
              ],
            },
            {
              id: 'p2-w02-t6',
              type: 'practice',
              text: 'Time remapping: right-click a clip and choose Speed/Duration to set a fixed percentage. Then apply the Time Remapping effect via the Effect Controls panel to create a speed ramp — for example, start at 100% speed and smoothly slow down to 20%. Drag the velocity keyframe handles to create a Bezier curve for a smooth transition. This is what makes cinematic slow-mo look professional.',
              steps: [
                { id: 'p2-w02-t6-s1', text: 'Right-click a clip on the timeline > Speed/Duration — set to 50%, check "Ripple Edit, Shifting Trailing Clips," click OK' },
                { id: 'p2-w02-t6-s2', text: 'Right-click the same clip > Show Clip Keyframes > Time Remapping > Speed — a velocity rubber-band line appears' },
                { id: 'p2-w02-t6-s3', text: 'Ctrl+click (Cmd+click) on the rubber-band line to add two keyframes: one at 20% through the clip, one at 80% through' },
                { id: 'p2-w02-t6-s4', text: 'Drag the middle segment between the keyframes up to speed up that section (above the line) or down to slow it (below the line)' },
                { id: 'p2-w02-t6-s5', text: 'Click the white handles on the keyframe diamonds and drag them apart to create a Bezier curve — this smooths the speed transition', substeps: ['Bezier handles appear as small white dots on either side of the keyframe diamond', 'Drag them further apart for a longer, smoother transition; closer together for a sharper snap'] },
                { id: 'p2-w02-t6-s6', text: 'Play back and adjust until the slow-motion transition feels natural, not abrupt' },
              ],
            },
            {
              id: 'p2-w02-t7',
              type: 'review',
              text: 'Domain 3 & 4 editing self-quiz: (1) What\'s the difference between a Ripple Edit and a Rolling Edit? (2) When would you Slip vs. Slide a clip? (3) How do you create and sync a multi-camera sequence? (4) How do you create a smooth speed ramp using Time Remapping? Write your answers before checking.',
              steps: [
                { id: 'p2-w02-t7-s1', text: 'Write answer to Q1: Ripple Edit (B) vs. Rolling Edit (N) — what does each one change? What happens to sequence length?' },
                { id: 'p2-w02-t7-s2', text: 'Write answer to Q2: Slip vs. Slide — when would you use each? What problem does each solve?' },
                { id: 'p2-w02-t7-s3', text: 'Write answer to Q3: Multi-cam sequence — name the steps to create and sync one' },
                { id: 'p2-w02-t7-s4', text: 'Write answer to Q4: Speed ramp — name the steps to create one using Time Remapping + Bezier handles' },
                { id: 'p2-w02-t7-s5', text: 'Compare answers to your notes; re-practice any tool you couldn\'t fully explain from memory' },
              ],
            },
          ],
          notes: 'The difference between a fast editor and a slow editor is almost entirely keyboard fluency. If you\'re still reaching for the razor tool to make cuts, keep drilling Q/W and J/K/L until they\'re automatic. Speed in editing is a skill, not a talent.',
        },
        {
          id: 'p2-w03',
          title: 'Week 8–9: Color, Graphics, Motion & Audio (Domains 4 & 5)',
          hours: '~14 hrs',
          tasks: [
            {
              id: 'p2-w03-t1',
              type: 'watch',
              text: 'Learn to read Lumetri Scopes before touching any color slider. The Waveform shows exposure (brightness), the Vectorscope shows saturation and hue, and the Histogram shows RGB channel distribution. Search "Lumetri Scopes explained for beginners" and watch one focused video for each scope before going hands-on.',
              links: [
                { label: 'Adobe: Lumetri scopes overview', url: 'https://helpx.adobe.com/premiere-pro/using/color-correction-color-grading.html' },
              ],
              steps: [
                { id: 'p2-w03-t1-s1', text: 'Window > Lumetri Scopes — dock the panel next to your Program Monitor' },
                { id: 'p2-w03-t1-s2', text: 'Right-click inside the Scopes panel — enable Waveform (Luma), Vectorscope YUV, and Histogram' },
                { id: 'p2-w03-t1-s3', text: 'Click through different clips in the timeline and watch the scopes change — observe how bright and dark areas affect the waveform' },
                { id: 'p2-w03-t1-s4', text: 'Watch one focused YouTube video on reading Lumetri Scopes (search "Lumetri Scopes explained beginners")' },
                { id: 'p2-w03-t1-s5', text: 'Know for the exam: Waveform = exposure level; Vectorscope = hue and saturation; Histogram = RGB channel distribution', substeps: ['Waveform clips the top edge (100) = blown highlights; clips the bottom (0) = crushed blacks', 'Vectorscope: spiky arms in a direction = strong saturated color; skin tones fall on the "skin tone line" at ~10 o\'clock'] },
              ],
            },
            {
              id: 'p2-w03-t2',
              type: 'practice',
              text: 'Color correction drill: find or create 5 clips with different problems — overexposed, underexposed, too warm (orange-tinted), too cool (blue-tinted), and flat/grey. Fix each one using only the Lumetri Basic Correction panel. Use the Waveform scope to guide your exposure, not your eyes alone — your monitor may not be calibrated.',
              steps: [
                { id: 'p2-w03-t2-s1', text: 'Click on the first problem clip in the timeline; open Lumetri Color > Basic Correction tab' },
                { id: 'p2-w03-t2-s2', text: 'Overexposed clip: drag Exposure down — watch the Waveform drop below the 100 line' },
                { id: 'p2-w03-t2-s3', text: 'Underexposed clip: lift Exposure and raise Shadows — fill the Waveform from about 0 to 75' },
                { id: 'p2-w03-t2-s4', text: 'Too warm (orange-tinted): drag White Balance > Temperature toward cooler (left); adjust Tint toward green if needed' },
                { id: 'p2-w03-t2-s5', text: 'Too cool (blue-tinted): drag Temperature toward warmer (right) until whites look neutral on the Vectorscope' },
                { id: 'p2-w03-t2-s6', text: 'Flat/grey clip: increase Contrast and raise Blacks; lower Highlights slightly to add depth' },
              ],
            },
            {
              id: 'p2-w03-t3',
              type: 'practice',
              text: 'Color grading: take a corrected clip and use the Creative tab (for a preset look), RGB Curves, and Color Wheels to give it a deliberate style — try warm/golden, cold/blue, or the classic teal-and-orange that dominates YouTube. Then use the Match Color tool (under Basic Correction) to automatically copy that look to another clip.',
              steps: [
                { id: 'p2-w03-t3-s1', text: 'Start from a corrected clip — Basic Correction should already look neutral before grading' },
                { id: 'p2-w03-t3-s2', text: 'Creative tab: browse the Look dropdown; try SL BLEACH and SL VIBRANT to see the range of available styles' },
                { id: 'p2-w03-t3-s3', text: 'Curves tab: add a gentle S-curve — drag a midpoint up slightly and lift the shadows just off the bottom' },
                { id: 'p2-w03-t3-s4', text: 'Color Wheels: add a slight teal tint to Shadows and a warm orange to Highlights — this is the classic YouTube grade' },
                { id: 'p2-w03-t3-s5', text: 'Select a different clip from the same scene; in Basic Correction click Compare and Match > choose your graded clip as the reference' },
                { id: 'p2-w03-t3-s6', text: 'Match Color automatically copies the look — fine-tune from there using the individual sliders' },
              ],
            },
            {
              id: 'p2-w03-t4',
              type: 'practice',
              text: 'Essential Graphics deep dive: build a lower-third title from scratch — name on top, title or location below, with a semi-transparent background shape behind the text. Use the text, shape, and layer tools inside the Essential Graphics panel (Window > Essential Graphics). Once you\'re happy with it, save it as a .mogrt template (hamburger menu > Export as Motion Graphics Template) for future reuse.',
              links: [
                { label: 'Adobe: Essential Graphics panel', url: 'https://helpx.adobe.com/premiere-pro/using/overview-of-the-essential-graphics-panel.html' },
              ],
              steps: [
                { id: 'p2-w03-t4-s1', text: 'Window > Essential Graphics; click New Layer > Text — type the name (e.g., "Ethan Wilson") in the Program Monitor' },
                { id: 'p2-w03-t4-s2', text: 'Click New Layer > Text again — type the role or location below the name; make it slightly smaller and a lighter color' },
                { id: 'p2-w03-t4-s3', text: 'Click New Layer > Rectangle to add a background shape; in the layer stack, drag it below both text layers' },
                { id: 'p2-w03-t4-s4', text: 'With the rectangle selected, lower its Opacity to 50–60% in the Effect Controls panel' },
                { id: 'p2-w03-t4-s5', text: 'Select all layers in the Essential Graphics panel; use the Align buttons to center the group horizontally near the bottom of the frame' },
                { id: 'p2-w03-t4-s6', text: 'Click the hamburger menu (≡) > Export as Motion Graphics Template — name it and save to your local drive for reuse' },
              ],
            },
            {
              id: 'p2-w03-t5',
              type: 'practice',
              text: 'Keyframe animation: in the Effect Controls panel, animate a title card — start with Scale at 0%, jump to 100% at frame 10, hold through the middle, then fade Opacity from 100% to 0% at the end. Select a keyframe pair, right-click, and choose Bezier to smooth the motion curve. This is the foundation of all motion graphics work.',
              steps: [
                { id: 'p2-w03-t5-s1', text: 'Click the title clip in the timeline; open Effect Controls (Shift+5)' },
                { id: 'p2-w03-t5-s2', text: 'In Effect Controls, move the playhead to the first frame (frame 0) of the clip; click the stopwatch next to Scale and set it to 0%' },
                { id: 'p2-w03-t5-s3', text: 'Move the playhead to frame 10; set Scale to 100% — a new keyframe appears automatically' },
                { id: 'p2-w03-t5-s4', text: 'Move the playhead to the last 10 frames; click the stopwatch next to Opacity and set it to 100% at that frame' },
                { id: 'p2-w03-t5-s5', text: 'On the very last frame, set Opacity to 0% — another keyframe appears' },
                { id: 'p2-w03-t5-s6', text: 'Select both Scale keyframes, right-click > Temporal Interpolation > Ease In; repeat for both Opacity keyframes' },
                { id: 'p2-w03-t5-s7', text: 'Play back — the title should pop on and fade out smoothly; adjust keyframe timing until the animation feels natural' },
              ],
            },
            {
              id: 'p2-w03-t6',
              type: 'practice',
              text: 'Essential Sound panel: import a video with dialogue and a music track. In Window > Essential Sound, tag the dialogue clip as "Dialogue" and the music as "Music." Enable Auto Ducking under the Music settings — Premiere will automatically lower the music whenever someone speaks. Adjust the sensitivity and target loudness sliders to taste.',
              steps: [
                { id: 'p2-w03-t6-s1', text: 'Window > Essential Sound to open the panel; dock it somewhere accessible' },
                { id: 'p2-w03-t6-s2', text: 'Click on the dialogue clip in the timeline; in Essential Sound, click "Dialogue" to tag it' },
                { id: 'p2-w03-t6-s3', text: 'Click on the music clip; in Essential Sound, click "Music" to tag it' },
                { id: 'p2-w03-t6-s4', text: 'With the music clip still selected, expand the Ducking section; toggle Enable on' },
                { id: 'p2-w03-t6-s5', text: 'Set Duck Against: Clip Type > Dialogue; set Sensitivity to ~5.0 and Target to -18 dB; click Generate Keyframes' },
                { id: 'p2-w03-t6-s6', text: 'Zoom into the music track in the timeline — verify that automatic volume dips appear wherever dialogue is present' },
              ],
            },
            {
              id: 'p2-w03-t7',
              type: 'practice',
              text: 'Audio mixing: set your dialogue track to sit around -12 to -6 dB, and your music to -18 to -24 dB so dialogue always cuts through. Check the Audio Meters panel (Window > Audio Meters) to make sure your final mix never peaks above -6 dB. Apply the DeNoise effect (Effects > Audio Effects > Noise Reduction/Restoration > DeNoise) to clean up background hiss on a dialogue clip.',
              steps: [
                { id: 'p2-w03-t7-s1', text: 'Window > Audio Meters — dock it to the right of your workspace so it\'s visible during playback' },
                { id: 'p2-w03-t7-s2', text: 'Play your sequence and watch the meters — dialogue should peak in the -12 to -6 dB range (green/yellow zone)' },
                { id: 'p2-w03-t7-s3', text: 'If music is too loud: right-click the music clip > Audio Gain > set Adjust Gain By to a negative value (e.g., -12 dB)' },
                { id: 'p2-w03-t7-s4', text: 'In the Effects panel: Audio Effects > Noise Reduction/Restoration > DeNoise — drag it onto your dialogue clip' },
                { id: 'p2-w03-t7-s5', text: 'In Effect Controls, double-click DeNoise to open the editor; drag Reduction until background hiss disappears without artifacts' },
                { id: 'p2-w03-t7-s6', text: 'Final check: play the full sequence; if anything peaks into the red zone in the Audio Meters, bring it down' },
              ],
            },
            {
              id: 'p2-w03-t8',
              type: 'project',
              text: 'Phase 2 mid-project: create a 60–90 second video that shows off what you\'ve learned — color grading, an animated lower-third title, and a clean audio mix with music plus at least one other sound layer. This is your second portfolio piece. Polish it the same way you would polish something you\'d actually post online.',
              steps: [
                { id: 'p2-w03-t8-s1', text: 'Choose a topic: tutorial, short film, travel montage, product showcase, or anything you want to actually make' },
                { id: 'p2-w03-t8-s2', text: 'Build the bin structure first (Footage, Audio/Music, Audio/SFX, Graphics, Exports), then import all assets' },
                { id: 'p2-w03-t8-s3', text: 'Assembly cut: rough order only — get everything on the timeline before touching any trim or color' },
                { id: 'p2-w03-t8-s4', text: 'Color correct every clip (Lumetri Basic Correction); grade 2–3 clips to a consistent look; use Match Color to spread it' },
                { id: 'p2-w03-t8-s5', text: 'Build an animated lower-third using Essential Graphics; export it as a .mogrt template after you\'re done' },
                { id: 'p2-w03-t8-s6', text: 'Mix audio: dialogue -12 to -6 dB, music -18 to -24 dB, Auto Ducking enabled; confirm nothing peaks above -6 dB' },
                { id: 'p2-w03-t8-s7', text: 'Export as H.264, YouTube 1080p; watch the full video critically and write down what you\'d improve' },
              ],
            },
          ],
          notes: 'For the exam, know the name of every Lumetri Color tab: Basic Correction, Creative, Curves, Color Wheels & Match, HSL Secondary, Vignette. Know what each tab is used for. You don\'t need to memorize specific slider values — just know which tool solves which problem.',
        },
        {
          id: 'p2-w04',
          title: 'Week 10: Export, Delivery & Project Management (Domain 6)',
          hours: '~7 hrs',
          tasks: [
            {
              id: 'p2-w04-t1',
              type: 'watch',
              text: 'Learn the export workflow before going hands-on: File > Export > Media opens the Export Settings dialog. Study each section — Format, Preset, the Video tab (resolution, frame rate, bitrate encoding), and the Audio tab. Focus especially on Bitrate Settings: VBR (Variable Bit Rate) 2-pass gives the best quality-to-file-size ratio and is what you should default to for web delivery.',
              links: [
                { label: 'Adobe: Export settings reference', url: 'https://helpx.adobe.com/premiere-pro/using/export-video-file.html' },
              ],
              steps: [
                { id: 'p2-w04-t1-s1', text: 'Open a sequence; File > Export > Media (Ctrl+M) — study each section without clicking Export yet' },
                { id: 'p2-w04-t1-s2', text: 'In the Video tab: find Bitrate Settings — toggle between VBR 1-pass, VBR 2-pass, and CBR; read the description for each' },
                { id: 'p2-w04-t1-s3', text: 'Note the difference between H.264 and H.265 (HEVC): H.265 is ~40% smaller at equivalent quality, but less universally supported on older devices' },
                { id: 'p2-w04-t1-s4', text: 'In the Audio tab: confirm codec is AAC, Sample Rate 48000 Hz, Channels Stereo — this is the standard for web delivery' },
                { id: 'p2-w04-t1-s5', text: 'Know for the exam: VBR = Variable Bit Rate (more bits for complex scenes); CBR = Constant Bit Rate (uniform throughout, simpler for streaming hardware)', substeps: ['VBR 2-pass: Premiere scans the video twice — first to analyze complexity, then to allocate bits — gives best quality per file size', 'CBR: every frame gets the same number of bits regardless of complexity — predictable but wasteful on simple scenes'] },
              ],
            },
            {
              id: 'p2-w04-t2',
              type: 'practice',
              text: 'Export the same 30-second clip using four different settings: (1) H.264 with the YouTube 1080p Full HD preset, (2) H.264 with a custom square 1:1 aspect ratio for Instagram, (3) H.264 at the maximum bitrate for a high-quality archive copy, and (4) if on Windows: DNxHR LB (if on Mac: ProRes 422). Compare the file sizes. Understand when you would use each.',
              steps: [
                { id: 'p2-w04-t2-s1', text: 'Set In/Out points on a clean 30-second segment of your best clip' },
                { id: 'p2-w04-t2-s2', text: 'Export 1: Format H.264, Preset YouTube 1080p Full HD — note the output file size' },
                { id: 'p2-w04-t2-s3', text: 'Export 2: Format H.264 — uncheck "Match Source" for Width/Height; change to 1080×1080 (square for Instagram); note the file size' },
                { id: 'p2-w04-t2-s4', text: 'Export 3: Format H.264, Bitrate Encoding CBR, Target Bitrate ~40 Mbps — this is a high-quality archive copy' },
                { id: 'p2-w04-t2-s5', text: 'Export 4: Windows: Format MXF OP1a, DNxHR LB 1080p 29.97 — or Mac: Format QuickTime, Codec Apple ProRes 422' },
                { id: 'p2-w04-t2-s6', text: 'Open File Explorer and compare all four file sizes side by side; write one sentence for when you\'d choose each format' },
              ],
            },
            {
              id: 'p2-w04-t3',
              type: 'practice',
              text: 'Adobe Media Encoder: instead of exporting directly from Premiere, go to File > Export > Media and click Queue (not Export). This sends the export to Media Encoder. Notice that Premiere stays fully unlocked for editing while Media Encoder renders in the background. Add a second preset to the same queue and render both at once.',
              steps: [
                { id: 'p2-w04-t3-s1', text: 'Have a sequence open; File > Export > Media (Ctrl+M)' },
                { id: 'p2-w04-t3-s2', text: 'Instead of clicking Export, click Queue — Premiere sends the job to Adobe Media Encoder and Media Encoder opens' },
                { id: 'p2-w04-t3-s3', text: 'In Media Encoder, right-click the queued job > Duplicate — now you have two copies of the same export' },
                { id: 'p2-w04-t3-s4', text: 'Change the second copy\'s preset to a different format (e.g., the Instagram 1080×1080 square you made earlier)' },
                { id: 'p2-w04-t3-s5', text: 'Click the green Play button in Media Encoder to render both exports simultaneously' },
                { id: 'p2-w04-t3-s6', text: 'Switch back to Premiere — confirm you can keep editing while Media Encoder renders in the background' },
              ],
            },
            {
              id: 'p2-w04-t4',
              type: 'practice',
              text: 'Project Manager: go to File > Project Manager. Choose "Collect Files and Copy to New Location" and pick a new folder. This creates a self-contained copy of your project with all media and assets bundled together — no broken links. This is what you do before handing a project off or putting it in long-term storage.',
              steps: [
                { id: 'p2-w04-t4-s1', text: 'File > Project Manager — the Project Manager dialog opens' },
                { id: 'p2-w04-t4-s2', text: 'Choose "Collect Files and Copy to New Location"; select a new empty folder on your desktop' },
                { id: 'p2-w04-t4-s3', text: 'Note the "Exclude Unused Clips" option — useful for cleaning up large projects before handoff' },
                { id: 'p2-w04-t4-s4', text: 'Click OK and wait for the copy to finish; open the destination folder and verify all media files are present' },
                { id: 'p2-w04-t4-s5', text: 'Open the new project file from the copied folder — verify no media is offline (no red "Media Offline" overlays on clips)' },
              ],
            },
            {
              id: 'p2-w04-t5',
              type: 'review',
              text: 'Domain 6 self-quiz: (1) What is VBR 2-pass and why is it better than CBR for web video? (2) What\'s the key difference between H.264 and H.265 in terms of file size and device support? (3) When would you use Media Encoder instead of direct export from Premiere? (4) What does Project Manager\'s "Collect Files" option do? Answer without checking.',
              steps: [
                { id: 'p2-w04-t5-s1', text: 'Write answer to Q1: VBR 2-pass — what is it and why is it better than CBR for web?', substeps: ['VBR 2-pass: two encoding passes — first analyzes complexity, second allocates more bits to hard scenes', 'Result: better quality at the same (or smaller) file size vs. CBR'] },
                { id: 'p2-w04-t5-s2', text: 'Write answer to Q2: H.264 vs. H.265 — file size difference and device support tradeoff' },
                { id: 'p2-w04-t5-s3', text: 'Write answer to Q3: When to use Media Encoder — the key benefit is keeping Premiere unlocked for editing during the render' },
                { id: 'p2-w04-t5-s4', text: 'Write answer to Q4: Project Manager "Collect Files" — copies all project media to one folder, eliminating broken link risk' },
                { id: 'p2-w04-t5-s5', text: 'Check all four answers against your notes; re-do any export workflow you couldn\'t explain clearly' },
              ],
            },
            {
              id: 'p2-w04-t6',
              type: 'project',
              text: 'Export your Phase 2 mid-project in two formats: one for YouTube (H.264, 1080p preset) and one as a master archive at the highest quality available on your system. Confirm both files play back correctly. This is the end of Phase 2 — you\'ve now touched every domain the exam will test.',
              steps: [
                { id: 'p2-w04-t6-s1', text: 'Open your Phase 2 mid-project sequence' },
                { id: 'p2-w04-t6-s2', text: 'Export 1: File > Export > Media > H.264 > YouTube 1080p Full HD; save to your Exports folder' },
                { id: 'p2-w04-t6-s3', text: 'Export 2: highest quality available — DNxHR LB on Windows, ProRes 422 on Mac, or H.264 at ~40 Mbps CBR' },
                { id: 'p2-w04-t6-s4', text: 'Watch Export 1 all the way through; note 3 things you\'re proud of and 1 thing you\'d improve' },
                { id: 'p2-w04-t6-s5', text: 'Compare file sizes of both exports — the archive copy should be significantly larger' },
              ],
            },
          ],
          notes: 'Platform delivery requirements to know for the exam: YouTube prefers H.264 or H.265 at up to 4K 60fps. Instagram and TikTok use 9:16 vertical video (1080×1920). Understanding why a format choice matters is more useful than memorizing bitrate numbers.',
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // PHASE 3 — Capstone & Exam Prep (Weeks 11–12, 12 tasks)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'phase-3',
      number: 3,
      title: 'Capstone & Exam Prep',
      duration: 'Weeks 11–12',
      length: '~2.5 weeks',
      hoursPerWeek: '~7 hrs/week',
      goal:
        'Apply everything you\'ve built in one polished final video — then lock in exam readiness with focused review. This phase is about confidence, not cramming. When you sit down for the exam, you should recognize every question from something you actually did.',
      checkpoint:
        'Have you finished your capstone video and scored 80% or higher on a full practice exam? If yes, you\'re ready. If a specific domain feels shaky, spend one more day drilling only that domain before exam day.',
      weeks: [
        {
          id: 'p3-w01',
          title: 'Week 11–12: Capstone Video Project',
          hours: '~14 hrs',
          tasks: [
            {
              id: 'p3-w01-t1',
              type: 'project',
              text: 'Plan your capstone video before opening Premiere. Choose something you actually want to make: a YouTube-style video, a short cinematic film, a personal summer highlight reel, a creative concept piece, or a design showcase. Write down three things: (1) what it is, (2) who it\'s for, and (3) the rough structure — intro, middle, end.',
              steps: [
                { id: 'p3-w01-t1-s1', text: 'Pick your concept: YouTube explainer, short film, summer highlight reel, design showcase, or anything you\'d actually watch' },
                { id: 'p3-w01-t1-s2', text: 'Write the three required items: (1) what it is, (2) who it\'s for, (3) the rough structure — intro → middle → end' },
                { id: 'p3-w01-t1-s3', text: 'List 5–8 specific shots or moments you\'ll need — this is your informal shot list' },
                { id: 'p3-w01-t1-s4', text: 'Identify your music source: Mixkit, ccMixter, or another licensed source — confirm it\'s legal to use before editing' },
                { id: 'p3-w01-t1-s5', text: 'Set a runtime target: 60–90 seconds is ideal for a certification-level capstone project' },
              ],
            },
            {
              id: 'p3-w01-t2',
              type: 'project',
              text: 'Gather all your assets before touching the timeline: footage, music (licensed or from a free source like Mixkit or ccMixter), sound effects, and any graphics or logos you want to use. Build your full bin structure first — Footage, Audio/Music, Audio/SFX, Graphics, Exports. A clean project at the start saves hours at the end.',
              steps: [
                { id: 'p3-w01-t2-s1', text: 'Create a new Premiere project named "Capstone"' },
                { id: 'p3-w01-t2-s2', text: 'Build the full bin structure first: Footage, Audio/Music, Audio/SFX, Graphics, Exports — all top-level bins before any importing' },
                { id: 'p3-w01-t2-s3', text: 'Import all footage, audio, and graphics; drag each file into its correct bin' },
                { id: 'p3-w01-t2-s4', text: 'Log the best moments in each footage clip using markers (M key) in the Source Monitor' },
                { id: 'p3-w01-t2-s5', text: 'Color-label unusable clips red (right-click > Label > Red) so they\'re easy to skip during the edit' },
                { id: 'p3-w01-t2-s6', text: 'Create your sequence with correct settings matching your footage before starting the assembly' },
              ],
            },
            {
              id: 'p3-w01-t3',
              type: 'project',
              text: 'Build the assembly cut: get all your clips in rough order on the timeline without worrying about fine-tuning. The only goal of an assembly cut is to confirm the structure works from start to finish. It will be messy — that\'s intentional. Tighten later.',
              steps: [
                { id: 'p3-w01-t3-s1', text: 'Place all usable clips in rough order on the timeline — use overwrite edits from the Source Monitor (period key)' },
                { id: 'p3-w01-t3-s2', text: 'Single goal only: confirm the structural arc works from start to finish — do not stop to trim or fix anything' },
                { id: 'p3-w01-t3-s3', text: 'Play through at 2× speed (press L twice) to quickly check the overall shape and pacing' },
                { id: 'p3-w01-t3-s4', text: 'If the structure feels broken, reorder sections now — it\'s much faster to move chunks before you\'ve trimmed anything' },
                { id: 'p3-w01-t3-s5', text: 'Note the approximate runtime — is it close to your 60–90 second target, or way off? Adjust your clip selection accordingly' },
              ],
            },
            {
              id: 'p3-w01-t4',
              type: 'project',
              text: 'Fine cut and polish: tighten every edit, finalize pacing, add all transitions, and color grade all clips to match each other across scenes. Use the Match Color tool for clips from the same location. Add your animated title sequence. This pass should feel like a real deliverable.',
              steps: [
                { id: 'p3-w01-t4-s1', text: 'Go through every cut: use Rolling Edit (N) to refine timing at each cut point' },
                { id: 'p3-w01-t4-s2', text: 'Color correct all clips using Lumetri Basic Correction — no clip should have obvious exposure or white balance problems' },
                { id: 'p3-w01-t4-s3', text: 'Apply your color grade to 1–2 key clips; use Match Color to spread the look to all clips from the same location' },
                { id: 'p3-w01-t4-s4', text: 'Add Cross Dissolve transitions where cuts feel abrupt; add Dip to Black at the very beginning and end' },
                { id: 'p3-w01-t4-s5', text: 'Build your animated title sequence using Essential Graphics + keyframe animation; position it at the top of the video' },
                { id: 'p3-w01-t4-s6', text: 'Play through from start to finish — watch for pacing problems, jarring cuts, or clips that overstay their welcome' },
              ],
            },
            {
              id: 'p3-w01-t5',
              type: 'project',
              text: 'Final audio mix: balance all dialogue, music, and SFX using the Essential Sound panel. Make sure nothing peaks above -6 dB in the Audio Meters. Add audio transitions (Constant Power) at every cut point that needs them. Watch through with headphones and fix anything that jumps out — your ears will catch things your eyes missed.',
              steps: [
                { id: 'p3-w01-t5-s1', text: 'Window > Essential Sound — tag every audio clip by type: Dialogue, Music, SFX, or Ambience' },
                { id: 'p3-w01-t5-s2', text: 'Enable Auto Ducking on all Music clips so the music lowers automatically during dialogue' },
                { id: 'p3-w01-t5-s3', text: 'Open Window > Audio Meters; play the full sequence — confirm nothing peaks above -6 dB (red zone)' },
                { id: 'p3-w01-t5-s4', text: 'Add Constant Power audio transitions at every hard audio cut (Effects > Audio Transitions > Crossfade > Constant Power)' },
                { id: 'p3-w01-t5-s5', text: 'Put on headphones and do a final listen-through; fix any audio jumps, hiss spikes, or imbalance you hear' },
                { id: 'p3-w01-t5-s6', text: 'Apply DeNoise (Effects > Audio Effects > Noise Reduction > DeNoise) to any dialogue clip with background hiss' },
              ],
            },
            {
              id: 'p3-w01-t6',
              type: 'project',
              text: 'Export and review: export the capstone as H.264, YouTube 1080p. Watch it on three different screens: your monitor, a phone, and a TV if possible. Every screen will look and sound different. Note what you\'d fix with another pass. This is how professionals review their own work.',
              steps: [
                { id: 'p3-w01-t6-s1', text: 'File > Export > Media: H.264, YouTube 1080p Full HD preset; save to your Exports folder' },
                { id: 'p3-w01-t6-s2', text: 'Watch on your monitor — does the color look different than in Premiere? (This reveals calibration differences)' },
                { id: 'p3-w01-t6-s3', text: 'Watch on your phone — is the title still readable at small size? Is audio balanced on phone speakers?' },
                { id: 'p3-w01-t6-s4', text: 'Watch on a TV if available — check for any issues that only appear at larger scale' },
                { id: 'p3-w01-t6-s5', text: 'Write down 3 things you\'re proud of and 1 thing you\'d fix — this is how you build a feedback loop for the next project' },
              ],
            },
          ],
          notes: 'This video is your proof of work. Every skill the exam tests — sequence setup, trimming, color grading, audio mixing, graphics, export — you just did all of it in one project. That hands-on muscle memory is worth more than any last-minute cramming.',
        },
        {
          id: 'p3-w02',
          title: 'Final Days: Domain Review & Exam Readiness',
          hours: '~7 hrs',
          tasks: [
            {
              id: 'p3-w02-t1',
              type: 'review',
              text: 'Domain 1 review — Video Industry: frame rates (24/30/60fps and when to use each), resolution (1080p vs 4K), codecs (H.264, ProRes, DNxHD) vs. containers (MP4, MOV, MXF), color space (Rec.709 for web/TV), the three production stages (pre-production/production/post-production), and copyright basics. Say each answer out loud — hearing yourself explain something shows you where the gaps are.',
              steps: [
                { id: 'p3-w02-t1-s1', text: 'Say out loud: frame rates and when to use each — 24fps, 30fps, 60fps' },
                { id: 'p3-w02-t1-s2', text: 'Say out loud: resolution — 1080p = 1920×1080, 4K UHD = 3840×2160' },
                { id: 'p3-w02-t1-s3', text: 'Say out loud: codec vs. container distinction — name three containers and three codecs and which is which' },
                { id: 'p3-w02-t1-s4', text: 'Say out loud: Rec.709 is the standard color space for web and broadcast video; Rec.2020 is for HDR' },
                { id: 'p3-w02-t1-s5', text: 'Say out loud: the three production stages — pre-production (planning/scripting), production (shooting), post-production (editing/delivery)' },
                { id: 'p3-w02-t1-s6', text: 'Write down any item you couldn\'t recall smoothly — spend 5 focused minutes on just that topic before moving on' },
              ],
            },
            {
              id: 'p3-w02-t2',
              type: 'review',
              text: 'Domain 2 & 3 review — Project Setup & Organization: creating sequence presets and why settings need to match your footage, workspace customization, all import methods (drag-drop, Media Browser, File > Import), proxy workflow, Project panel features (metadata, icon view, filter), bin organization, color labels, marking footage with In/Out points, adding and naming markers, and what to do if Premiere says media is offline.',
              steps: [
                { id: 'p3-w02-t2-s1', text: 'Explain sequence presets: why must your settings match your footage? (frame rate, resolution, pixel aspect ratio must all align)' },
                { id: 'p3-w02-t2-s2', text: 'Name all import methods: File > Import, Media Browser, and drag-and-drop from File Explorer/Finder' },
                { id: 'p3-w02-t2-s3', text: 'Explain proxy workflow from memory: what are proxies, how do you create them, and when does Premiere switch back to full-res?' },
                { id: 'p3-w02-t2-s4', text: 'Describe bin organization: what makes a good bin structure? (separate by type: Footage, Audio, Graphics, Exports)' },
                { id: 'p3-w02-t2-s5', text: 'Explain what "Media Offline" means and the two steps to reconnect: right-click clip > Link Media > navigate to the file\'s new location' },
              ],
            },
            {
              id: 'p3-w02-t3',
              type: 'review',
              text: 'Domain 4 review — Editing: all four trim tools (Ripple, Rolling, Slip, Slide) and exactly what each one changes, 3-point editing, multi-cam sequences, time remapping with smooth ramps, all six Lumetri Color tabs (Basic Correction / Creative / Curves / Color Wheels / HSL Secondary / Vignette) and what each controls, the Essential Graphics panel, keyframe animation with Bezier easing, and the Warp Stabilizer effect.',
              steps: [
                { id: 'p3-w02-t3-s1', text: 'Name all four trim tools with shortcuts: Ripple (B), Rolling (N), Slip (Y), Slide (U) — explain what each one changes' },
                { id: 'p3-w02-t3-s2', text: 'Explain 3-point editing: mark In + Out in Source Monitor (2 points) + set playhead in timeline (1 point) = overwrite or insert' },
                { id: 'p3-w02-t3-s3', text: 'List all six Lumetri Color tabs and one use case each: Basic Correction, Creative, Curves, Color Wheels & Match, HSL Secondary, Vignette' },
                { id: 'p3-w02-t3-s4', text: 'Describe keyframe Bezier easing: right-click keyframe > Temporal Interpolation > Ease In/Out — smooths the animation curve' },
                { id: 'p3-w02-t3-s5', text: 'Describe the Warp Stabilizer: found in Effects > Distort > Warp Stabilizer — corrects camera shake; apply after finalizing all trims', substeps: ['Warp Stabilizer re-analyzes the clip whenever you trim it — always finalize your cuts before applying it', 'The exam will ask what it does and where it\'s found'] },
              ],
            },
            {
              id: 'p3-w02-t4',
              type: 'review',
              text: 'Domain 5 & 6 review — Audio & Export: the four Essential Sound panel categories (Dialogue/Music/SFX/Ambience) and what each one does, audio ducking, the difference between audio gain and volume, Constant Power vs. Constant Gain audio transitions, the DeNoise effect, export formats (H.264 vs. H.265 vs. ProRes), VBR vs. CBR bitrate encoding, sending to Adobe Media Encoder, and what Project Manager\'s Collect Files option does.',
              steps: [
                { id: 'p3-w02-t4-s1', text: 'Name the four Essential Sound categories and one thing each does: Dialogue (loudness), Music (ducking), SFX (ambience sync), Ambience (fill)' },
                { id: 'p3-w02-t4-s2', text: 'Explain audio ducking: Auto Ducking automatically lowers music volume when Dialogue is detected — set via Essential Sound > Music > Ducking' },
                { id: 'p3-w02-t4-s3', text: 'Explain gain vs. volume: Gain is a fixed clip-level adjustment (right-click > Audio Gain); Volume is keyframeable per-clip in the timeline' },
                { id: 'p3-w02-t4-s4', text: 'Name two audio transitions: Constant Power (smooth crossfade — default, preferred) and Constant Gain (linear — can sound abrupt)' },
                { id: 'p3-w02-t4-s5', text: 'Explain VBR 2-pass vs. CBR; explain what Project Manager "Collect Files" does (bundles all project media to one folder)' },
              ],
            },
            {
              id: 'p3-w02-t5',
              type: 'review',
              text: 'Take a full timed practice exam: use Adobe\'s official practice materials at certiport.com (search "Adobe Certified Professional" and look for practice tests) or the Adobe Education Exchange. Set a 50-minute timer. Treat it like the real exam — no looking things up. When you review it, don\'t just note what you got wrong: understand why the correct answer is correct.',
              links: [
                { label: 'Certiport — Adobe Certified Professional', url: 'https://certiport.pearsonvue.com/Certifications/Adobe/ACP/Overview' },
                { label: 'Adobe Education Exchange', url: 'https://edex.adobe.com' },
              ],
              steps: [
                { id: 'p3-w02-t5-s1', text: 'Find practice materials: Certiport (certiport.com), Adobe Education Exchange (edex.adobe.com), or search "ACP Premiere Pro practice test"' },
                { id: 'p3-w02-t5-s2', text: 'Set a 50-minute timer — no looking up answers, no pausing; treat it exactly like the real exam' },
                { id: 'p3-w02-t5-s3', text: 'After the timer: score your results; mark every wrong answer with a note of the correct answer' },
                { id: 'p3-w02-t5-s4', text: 'For each wrong answer: don\'t just note the correction — write out WHY that answer is correct' },
                { id: 'p3-w02-t5-s5', text: 'If score is below 75%: identify the 1–2 domains with the most wrong answers; spend 30 focused minutes on those domains only' },
                { id: 'p3-w02-t5-s6', text: 'Target 80%+ before exam day — that gives a safety margin above the ~70% passing threshold' },
              ],
            },
            {
              id: 'p3-w02-t6',
              type: 'review',
              text: 'Interface speed drill — open a fresh Premiere project and time how fast you can: (1) create a new sequence with a specific preset, (2) apply a Cross Dissolve transition, (3) open Lumetri Color, (4) create an Essential Graphics text layer, (5) open Export Settings and select a preset, and (6) find the Audio Meters panel. The exam includes interface-based questions that reward muscle memory, not just knowledge.',
              steps: [
                { id: 'p3-w02-t6-s1', text: 'Open a fresh Premiere project with no clips loaded' },
                { id: 'p3-w02-t6-s2', text: 'Time it: File > New > Sequence with a specific preset — target under 20 seconds' },
                { id: 'p3-w02-t6-s3', text: 'Add any clip; time how fast you can apply a Cross Dissolve from the Effects panel — target under 15 seconds' },
                { id: 'p3-w02-t6-s4', text: 'Open Lumetri Color: Window > Lumetri Color — target under 5 seconds from memory' },
                { id: 'p3-w02-t6-s5', text: 'In the Program Monitor, press T for the Type tool and create an Essential Graphics text layer — target under 15 seconds' },
                { id: 'p3-w02-t6-s6', text: 'File > Export > Media and select a preset — target under 10 seconds' },
                { id: 'p3-w02-t6-s7', text: 'Find and open the Audio Meters panel: Window > Audio Meters — target under 5 seconds', substeps: ['The exam has interface-based performance tasks where you click in a simulated Premiere environment', 'Muscle memory from drilling these actions is what makes performance questions fast and reliable'] },
              ],
            },
          ],
          notes: 'Exam format: the Adobe Certified Professional exam is ~50 questions, 50 minutes. It includes multiple-choice and some performance-based tasks where you click directly in a simulated Premiere interface. Passing score is approximately 700 out of 1000. The performance-based questions are where the hands-on work you\'ve done pays off.',
        },
      ],
    },

  ],
};

export default PLAN;
