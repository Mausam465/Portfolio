import React, { useEffect, useRef } from "react";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./RobotHero.css";

const Hero = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const textRef = useRef(null);
  
  // Robot Parts Refs
  const cursorRef = useRef(null);
  const cursorRingRef = useRef(null);
  const particlesRef = useRef(null);
  const headGroupRef = useRef(null);
  const robotSvgRef = useRef(null);
  const pupilLeftRef = useRef(null);
  const shineLeft1Ref = useRef(null);
  const shineLeft2Ref = useRef(null);
  const pupilRightRef = useRef(null);
  const shineRight1Ref = useRef(null);
  const shineRight2Ref = useRef(null);
  const browLeftRef = useRef(null);
  const browRightRef = useRef(null);
  
  // Scroll and Tween Refs for Smooth Animation
  const scrollTarget = useRef(0);
  const scrollCurrent = useRef(0);

  useEffect(() => {
    // --- PARTICLES ---
    const pc = particlesRef.current;
    if (pc && pc.innerHTML === "") { 
      for (let i = 0; i < 36; i++) {
        const p = document.createElement("div");
        p.className = "p";
        const s = Math.random() * 3 + 0.8;
        // Colors: Gold, Grey, Secondary
        const c =
          Math.random() < 0.5
            ? "201,169,97"
            : Math.random() < 0.5
            ? "232,232,232"
            : "155,139,126";
        p.style.cssText = `left:${Math.random() * 100}%;top:${
          Math.random() * 100
        }%;width:${s}px;height:${s}px;background:rgba(${c},.6);--d:${
          6 + Math.random() * 10
        }s;--dl:${Math.random() * 6}s;--dy:${
          -18 - Math.random() * 36
        }px;--op:${0.15 + Math.random() * 0.42};box-shadow:0 0 ${
          s * 3
        }px rgba(${c},.6)`;
        pc.appendChild(p);
      }
    }

    // --- CURSOR ---
    const cur = cursorRef.current;
    const ring = cursorRingRef.current;
    let mx = window.innerWidth / 2,
      my = window.innerHeight / 2,
      rx = mx,
      ry = my;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (cur) {
        cur.style.left = mx + "px";
        cur.style.top = my + "px";
      }
    };

    const handleTouchMove = (e) => {
        if(e.touches.length > 0) {
            mx = e.touches[0].clientX;
            my = e.touches[0].clientY;
        }
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove, { passive: true });

    let animationFrameId;
    // Robot Tracking state
    let currentHx = 0, currentHy = 0, currentBx = 0, currentBy = 0;
    const lerp = (a, b, t) => a + (b - a) * t;

    const loop = () => {
      // 1. Cursor Smoothing
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      if (ring) {
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
      }
      
      // 2. Scroll Smoothing (Lerp)
      // Lerp current scroll value towards target scroll value
      scrollCurrent.current = lerp(scrollCurrent.current, scrollTarget.current, 0.1);
      const progress = scrollCurrent.current;
      
      // Update Scene (Robot) Transform based on smoothed progress
      if (sceneRef.current && window.innerWidth > 768) {
          const startLeft = 50;
          const endLeft = 25;
          const startTop = 60; 
          const endTop = 50;
          
          // SCALES: Increased start scale as requested
          const startScale = 1.55; 
          const endScale = 1;

          const curLeft = startLeft + (endLeft - startLeft) * progress;
          const curTop = startTop + (endTop - startTop) * progress;
          const curScale = startScale + (endScale - startScale) * progress;

          sceneRef.current.style.left = `${curLeft}%`;
          sceneRef.current.style.top = `${curTop}%`;
          sceneRef.current.style.transform = `translate(-50%, -50%) scale(${curScale})`;
      }

      // Update Text opacity/transform based on smoothed progress
      if(textRef.current && window.innerWidth > 768) {
         let textProg = (progress - 0.1) / 0.6; 
         textProg = Math.max(0, Math.min(textProg, 1));
         
         textRef.current.style.opacity = textProg;
         textRef.current.style.transform = `translate(${50 - 50 * textProg}px, -50%)`;
      }
      
      // --- ROBOT TRACKING ---
      if (!headGroupRef.current || !robotSvgRef.current) {
          animationFrameId = requestAnimationFrame(loop);
          return;
      }

      const EL = { x: 129, y: 139 };
      const ER = { x: 191, y: 139 };
      const MAX_P = 8;
      const MAX_HY = 30;
      const MAX_HX = 22;
      const MAX_BY = 8;

      const nx = (mx / window.innerWidth - 0.5) * 2;
      const ny = (my / window.innerHeight - 0.5) * 2;
      
       currentHx = lerp(currentHx, nx * MAX_HY, 0.12);
       currentHy = lerp(currentHy, ny * MAX_HX, 0.12);
       currentBx = lerp(currentBx, nx * MAX_BY, 0.07);
       currentBy = lerp(currentBy, ny * MAX_BY, 0.07);

      headGroupRef.current.style.transform = `rotateY(${currentHx}deg) rotateX(${-currentHy}deg) translateX(${
        currentHx * 0.6
      }px) translateY(${currentHy * 0.38}px)`;
      
      robotSvgRef.current.style.transform = `rotateY(${currentBx * 0.35}deg) rotateX(${-currentBy * 0.28}deg)`;

      const px = nx * MAX_P;
      const py = ny * MAX_P;

      if(pupilLeftRef.current) {
        pupilLeftRef.current.setAttribute("cx", EL.x + px);
        pupilLeftRef.current.setAttribute("cy", EL.y + py);
      }
      if(shineLeft1Ref.current) {
        shineLeft1Ref.current.setAttribute("cx", EL.x + px - 5);
        shineLeft1Ref.current.setAttribute("cy", EL.y + py - 5);
      }
      if(shineLeft2Ref.current) {
        shineLeft2Ref.current.setAttribute("cx", EL.x + px + 4);
        shineLeft2Ref.current.setAttribute("cy", EL.y + py + 4);
      }
      if(pupilRightRef.current) {
        pupilRightRef.current.setAttribute("cx", ER.x + px);
        pupilRightRef.current.setAttribute("cy", ER.y + py);
      }
      if(shineRight1Ref.current) {
        shineRight1Ref.current.setAttribute("cx", ER.x + px - 5);
        shineRight1Ref.current.setAttribute("cy", ER.y + py - 5);
      }
      if(shineRight2Ref.current) {
        shineRight2Ref.current.setAttribute("cx", ER.x + px + 4);
        shineRight2Ref.current.setAttribute("cy", ER.y + py + 4);
      }

      const bl = ny * -8;
      if(browLeftRef.current) browLeftRef.current.setAttribute("d", `M106 ${108 + bl} Q127 ${101 + bl} 142 ${108 + bl}`);
      if(browRightRef.current) browRightRef.current.setAttribute("d", `M178 ${108 + bl} Q193 ${101 + bl} 214 ${108 + bl}`);

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    // --- SCROLL INTERACTION ---
    const handleScroll = () => {
      // 1. Check Scroll Reveal for general elements
      const reveals = document.querySelectorAll(".reveal");
      const sh = document.getElementById("sh");
      
      const scrollY = window.scrollY;
      
      // Hide hint
      if(sh) {
          sh.style.opacity = scrollY > 50 ? "0" : "0.7";
      }

      // Hide cursor parts if deep in page
      if (cur) cur.style.opacity = scrollY > window.innerHeight * 1.5 ? "0" : "1";
      if (ring) ring.style.opacity = scrollY > window.innerHeight * 1.5 ? "0" : "0.5";

      // 2. Sticky Scroll Logic
      if (window.innerWidth > 768 && containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const trackHeight = rect.height;
          const stickyHeight = window.innerHeight;
          const maxScroll = trackHeight - stickyHeight; 
          let progress = -rect.top / maxScroll;
          
          // Update the target, the loop handles smoothing
          scrollTarget.current = Math.max(0, Math.min(progress, 1));
      } else {
        // Reset if mobile
        scrollTarget.current = 0;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once to set initial state
    handleScroll();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div id="cur" ref={cursorRef}></div>
      <div id="cur-ring" ref={cursorRingRef}></div>
      <div className="scan"></div>

      {/* Main Track Container for Sticky Scroll */}
      <section className="robot-hero-container" id="hero" ref={containerRef}>
        
        {/* Sticky Viewport */}
        <div className="hero-sticky">
            <div className="blob b1"></div>
            <div className="blob b2"></div>
            <div className="blob b3"></div>
            <div id="pts" ref={particlesRef}></div>

            <div id="scene" ref={sceneRef}>
            <div id="robot-wrap">
                <div id="shadow"></div>
                <svg
                id="robot-svg"
                ref={robotSvgRef}
                viewBox="0 0 320 460"
                xmlns="http://www.w3.org/2000/svg"
                >
                <defs>
                    <radialGradient id="hg" cx="42%" cy="32%" r="62%">
                    <stop offset="0%" stopColor="#242424" />
                    <stop offset="100%" stopColor="#111111" />
                    </radialGradient>
                    <radialGradient id="tg" cx="42%" cy="28%" r="58%">
                    <stop offset="0%" stopColor="#2a2a2a" />
                    <stop offset="100%" stopColor="#151515" />
                    </radialGradient>
                    <radialGradient id="eg" cx="36%" cy="30%" r="60%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="35%" stopColor="#c9a961" />
                    <stop offset="100%" stopColor="#3d3014" />
                    </radialGradient>
                    <radialGradient id="pg" cx="35%" cy="30%" r="65%">
                    <stop offset="0%" stopColor="#1a1a1a" />
                    <stop offset="100%" stopColor="#000000" />
                    </radialGradient>
                    <radialGradient id="ls" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#0a0a0a" />
                    <stop offset="100%" stopColor="#020202" />
                    </radialGradient>
                    <filter id="gw" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="3.5" result="b" />
                    <feComposite in="SourceGraphic" in2="b" operator="over" />
                    </filter>
                    <filter id="sgw" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="6" result="b" />
                    <feComposite in="SourceGraphic" in2="b" operator="over" />
                    </filter>
                    <filter id="pkgw" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="4" result="b" />
                    <feFlood floodColor="#9b8b7e" floodOpacity=".5" result="c" />
                    <feComposite in="c" in2="b" operator="in" result="d" />
                    <feComposite in="SourceGraphic" in2="d" operator="over" />
                    </filter>
                </defs>

                {/* LEGS */}
                <rect x="107" y="334" width="38" height="62" rx="13" fill="url(#tg)" stroke="rgba(201,169,97,0.22)" strokeWidth="1.2" />
                <rect x="175" y="334" width="38" height="62" rx="13" fill="url(#tg)" stroke="rgba(201,169,97,0.22)" strokeWidth="1.2" />
                <rect x="98" y="390" width="56" height="19" rx="10" fill="#0a0a0a" stroke="rgba(201,169,97,0.2)" strokeWidth="1" />
                <rect x="102" y="394" width="14" height="3" rx="1.5" fill="rgba(201,169,97,0.28)" />
                <rect x="166" y="390" width="56" height="19" rx="10" fill="#0a0a0a" stroke="rgba(201,169,97,0.2)" strokeWidth="1" />
                <rect x="204" y="394" width="14" height="3" rx="1.5" fill="rgba(201,169,97,0.28)" />

                {/* TORSO */}
                <rect x="94" y="226" width="132" height="116" rx="26" fill="url(#tg)" stroke="rgba(201,169,97,0.28)" strokeWidth="1.5" />
                <rect x="108" y="238" width="104" height="62" rx="10" fill="rgba(20,20,20,0.8)" stroke="rgba(201,169,97,0.32)" strokeWidth="1" />
                <rect x="116" y="247" width="54" height="3" rx="1.5" fill="rgba(201,169,97,0.7)" className="cline" />
                <rect x="116" y="255" width="36" height="3" rx="1.5" fill="rgba(232,232,232,0.6)" className="cline" style={{ animationDelay: ".2s" }} />
                <rect x="116" y="263" width="64" height="3" rx="1.5" fill="rgba(201,169,97,0.55)" className="cline" style={{ animationDelay: ".4s" }} />
                <rect x="116" y="271" width="30" height="3" rx="1.5" fill="rgba(155,139,126,0.55)" className="cline" style={{ animationDelay: ".6s" }} />
                <rect x="116" y="279" width="50" height="3" rx="1.5" fill="rgba(232,232,232,0.5)" className="cline" style={{ animationDelay: ".8s" }} />
                <rect x="116" y="287" width="44" height="3" rx="1.5" fill="rgba(201,169,97,0.45)" className="cline" style={{ animationDelay: "1s" }} />
                
                <circle cx="108" cy="322" r="5" fill="#070707" stroke="rgba(201,169,97,0.35)" strokeWidth="1" />
                <circle cx="212" cy="322" r="5" fill="#070707" stroke="rgba(201,169,97,0.35)" strokeWidth="1" />

                {/* ARMS */}
                <rect x="56" y="234" width="34" height="74" rx="14" fill="url(#tg)" stroke="rgba(201,169,97,0.2)" strokeWidth="1" />
                <circle cx="73" cy="308" r="9" fill="#070707" stroke="rgba(201,169,97,0.28)" strokeWidth="1.2" />
                <g transform="rotate(18,73,316)"><rect x="60" y="308" width="26" height="54" rx="11" fill="url(#tg)" stroke="rgba(201,169,97,0.17)" strokeWidth="1" /></g>
                <ellipse cx="72" cy="368" rx="14" ry="9" fill="#111111" stroke="rgba(201,169,97,0.2)" strokeWidth="1" />

                <rect x="230" y="234" width="34" height="74" rx="14" fill="url(#tg)" stroke="rgba(201,169,97,0.2)" strokeWidth="1" />
                <circle cx="247" cy="308" r="9" fill="#070707" stroke="rgba(201,169,97,0.28)" strokeWidth="1.2" />
                <g transform="rotate(-18,247,316)"><rect x="234" y="308" width="26" height="54" rx="11" fill="url(#tg)" stroke="rgba(201,169,97,0.17)" strokeWidth="1" /></g>
                <ellipse cx="248" cy="368" rx="14" ry="9" fill="#111111" stroke="rgba(201,169,97,0.2)" strokeWidth="1" />

                {/* LAPTOP */}
                <rect x="68" y="371" width="184" height="19" rx="6" fill="#111111" stroke="rgba(201,169,97,0.28)" strokeWidth="1" />
                <rect x="75" y="375" width="8" height="5" rx="1.5" className="kbd-key" />
                <rect x="86" y="375" width="8" height="5" rx="1.5" className="kbd-key" style={{ animationDelay: ".1s" }} />
                <rect x="97" y="375" width="8" height="5" rx="1.5" className="kbd-key" style={{ animationDelay: ".2s" }} />
                <rect x="108" y="375" width="8" height="5" rx="1.5" className="kbd-key" style={{ animationDelay: ".3s" }} />
                <rect x="119" y="375" width="8" height="5" rx="1.5" className="kbd-key" style={{ animationDelay: ".4s" }} />
                <rect x="130" y="375" width="8" height="5" rx="1.5" className="kbd-key" style={{ animationDelay: ".5s" }} />
                <rect x="141" y="375" width="8" height="5" rx="1.5" className="kbd-key" style={{ animationDelay: ".6s" }} />
                <rect x="152" y="375" width="8" height="5" rx="1.5" className="kbd-key" style={{ animationDelay: ".7s" }} />
                <rect x="163" y="375" width="8" height="5" rx="1.5" className="kbd-key" style={{ animationDelay: ".8s" }} />
                <rect x="174" y="375" width="8" height="5" rx="1.5" className="kbd-key" style={{ animationDelay: ".9s" }} />
                <rect x="185" y="375" width="8" height="5" rx="1.5" className="kbd-key" style={{ animationDelay: "1s" }} />
                <rect x="196" y="375" width="8" height="5" rx="1.5" className="kbd-key" style={{ animationDelay: "1.1s" }} />
                <rect x="108" y="381" width="100" height="5" rx="2.5" fill="rgba(232,232,232,0.3)" />
                <rect x="146" y="386" width="36" height="4" rx="2" fill="#0a0a0a" stroke="rgba(201,169,97,0.18)" strokeWidth=".8" />

                <rect x="76" y="288" width="168" height="86" rx="9" fill="#111111" stroke="rgba(201,169,97,0.3)" strokeWidth="1.2" />
                <rect x="80" y="292" width="160" height="76" rx="6" fill="url(#ls)" />
                <text x="86" y="304" fontFamily="monospace" fontSize="6" fill="#e8e8e8" opacity=".9">const mausam = () =&gt; ?</text>
                <rect x="86" y="308" width="52" height="2.5" rx="1" fill="rgba(201,169,97,0.5)" />
                <rect x="86" y="314" width="38" height="2.5" rx="1" fill="rgba(155,139,126,0.48)" />
                <rect x="86" y="320" width="70" height="2.5" rx="1" fill="rgba(232,232,232,0.4)" />
                <rect x="86" y="326" width="44" height="2.5" rx="1" fill="rgba(201,169,97,0.38)" />
                <rect x="86" y="332" width="58" height="2.5" rx="1" fill="rgba(155,139,126,0.33)" />
                <rect x="86" y="338" width="32" height="2.5" rx="1" fill="rgba(232,232,232,0.32)" />
                <rect x="86" y="344" width="48" height="2.5" rx="1" fill="rgba(201,169,97,0.28)" />
                <rect x="86" y="350" width="42" height="2.5" rx="1" fill="rgba(155,139,126,0.28)" />
                <rect x="140" y="304" width="1.5" height="6" rx=".5" fill="#c9a961"><animate attributeName="opacity" values="1;0;1" dur=".9s" repeatCount="indefinite" /></rect>
                <rect x="76" y="370" width="168" height="4" rx="2" fill="#242424" stroke="rgba(201,169,97,0.2)" strokeWidth=".8" />

                <rect x="140" y="210" width="40" height="22" rx="7" fill="#111111" stroke="rgba(201,169,97,0.2)" strokeWidth="1" />
                <circle cx="150" cy="221" r="3" fill="#111111" stroke="rgba(201,169,97,0.28)" strokeWidth=".8" opacity=".6" />
                <circle cx="170" cy="221" r="3" fill="#111111" stroke="rgba(201,169,97,0.28)" strokeWidth=".8" opacity=".6" />

                {/* HEAD */}
                <g id="hgrp" ref={headGroupRef} style={{ transformOrigin: "160px 230px" }}>
                    <rect x="82" y="60" width="156" height="156" rx="48" fill="url(#hg)" stroke="rgba(201,169,97,0.35)" strokeWidth="1.8" />
                    <ellipse cx="118" cy="88" rx="24" ry="14" fill="rgba(255,255,255,.035)" />
                    
                    <circle className="ear-l" cx="86" cy="132" r="16" fill="#0e0e0e" stroke="rgba(201,169,97,0.32)" strokeWidth="1.3" />
                    <circle className="ear-l" cx="86" cy="132" r="8" fill="rgba(201,169,97,0.07)" stroke="rgba(201,169,97,0.28)" strokeWidth=".8" />
                    <circle className="ear-r" cx="234" cy="132" r="16" fill="#0e0e0e" stroke="rgba(201,169,97,0.32)" strokeWidth="1.3" />
                    <circle className="ear-r" cx="234" cy="132" r="8" fill="rgba(201,169,97,0.07)" stroke="rgba(201,169,97,0.28)" strokeWidth=".8" />

                    <line x1="160" y1="60" x2="160" y2="34" stroke="rgba(201,169,97,0.5)" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="160" cy="25" r="11" fill="#111111" stroke="rgba(201,169,97,0.45)" strokeWidth="1.5" />
                    <circle cx="160" cy="25" r="6.5" fill="#ffffff" className="ant-glow" filter="url(#gw)" />
                    <polygon points="160,14 162.5,22 160,25 157.5,22" fill="#ffffff" opacity=".7" />
                    <polygon points="171,25 163,23 160,25 163,27" fill="#ffffff" opacity=".7" />

                    <path id="brow-l" ref={browLeftRef} d="M106 108 Q127 101 142 108" stroke="rgba(201,169,97,0.7)" strokeWidth="2.8" fill="none" strokeLinecap="round" />
                    <path id="brow-r" ref={browRightRef} d="M178 108 Q193 101 214 108" stroke="rgba(201,169,97,0.7)" strokeWidth="2.8" fill="none" strokeLinecap="round" />

                    <rect x="96" y="116" width="128" height="50" rx="16" fill="rgba(0,0,0,0.88)" stroke="rgba(201,169,97,0.18)" strokeWidth="1" />

                    <g id="eye-l">
                    <circle cx="129" cy="139" r="22" fill="none" stroke="rgba(201,169,97,0.38)" strokeWidth="3" filter="url(#sgw)" />
                    <circle cx="129" cy="139" r="19" fill="#080808" stroke="rgba(201,169,97,0.7)" strokeWidth="2" />
                    <circle cx="129" cy="139" r="14" fill="url(#eg)" />
                    <g id="plg">
                        <circle id="pl" ref={pupilLeftRef} cx="129" cy="139" r="8.5" fill="url(#pg)" />
                        <circle id="sl1" ref={shineLeft1Ref} cx="124" cy="134" r="3.5" fill="rgba(255,255,255,.82)" />
                        <circle id="sl2" ref={shineLeft2Ref} cx="133" cy="143" r="1.8" fill="rgba(255,255,255,.36)" />
                    </g>
                    <circle className="sparkle" cx="142" cy="122" r="2.2" fill="white" opacity=".9" />
                    <circle className="sparkle" cx="116" cy="126" r="1.5" fill="white" opacity=".7" style={{ animationDelay: ".5s" }} />
                    </g>

                    <g id="eye-r">
                    <circle cx="191" cy="139" r="22" fill="none" stroke="rgba(201,169,97,0.38)" strokeWidth="3" filter="url(#sgw)" />
                    <circle cx="191" cy="139" r="19" fill="#080808" stroke="rgba(201,169,97,0.7)" strokeWidth="2" />
                    <circle cx="191" cy="139" r="14" fill="url(#eg)" />
                    <g id="prg">
                        <circle id="pr" ref={pupilRightRef} cx="191" cy="139" r="8.5" fill="url(#pg)" />
                        <circle id="sr1" ref={shineRight1Ref} cx="186" cy="134" r="3.5" fill="rgba(255,255,255,.82)" />
                        <circle id="sr2" ref={shineRight2Ref} cx="196" cy="143" r="1.8" fill="rgba(255,255,255,.36)" />
                    </g>
                    <circle className="sparkle" cx="204" cy="122" r="2.2" fill="white" opacity=".9" style={{ animationDelay: ".3s" }} />
                    <circle className="sparkle" cx="178" cy="126" r="1.5" fill="white" opacity=".7" style={{ animationDelay: ".8s" }} />
                    </g>

                    <ellipse cx="106" cy="166" rx="18" ry="11" fill="rgba(155,139,126,0.38)" className="blush" filter="url(#pkgw)" />
                    <ellipse cx="214" cy="166" rx="18" ry="11" fill="rgba(155,139,126,0.38)" className="blush" filter="url(#pkgw)" style={{ animationDelay: ".5s" }} />

                    <path d="M134 176 Q160 196 186 176" stroke="rgba(201,169,97,0.9)" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#gw)" />
                    <path d="M134 176 Q160 196 186 176" stroke="rgba(201,169,97,0.25)" strokeWidth="7" fill="none" strokeLinecap="round" />
                    <line x1="160" y1="64" x2="160" y2="208" stroke="rgba(201,169,97,0.05)" strokeWidth=".8" />
                </g>
                </svg>
            </div>
            </div>

            {/* TEXT SECTION (Initially hidden, revealed on scroll) */}
            <div id="text-section" ref={textRef}>
            <p className="tag" style={{ color: "#c9a961", fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)", fontWeight: "600", marginBottom: "clamp(0.3rem, 1vw, 0.5rem)", letterSpacing: "0.5px" }}>Hello, I'm</p>
            <h1 className="hero-heading" style={{ fontSize: "clamp(1.8rem, 6vw, 3.5rem)", lineHeight: "1.2", marginBottom: "clamp(0.8rem, 2vw, 1.2rem)" }}>
                <span style={{ color: "#ffffff" }}>Mausam</span>
                <span className="nm" style={{ color: "#c9a961", marginLeft: "clamp(6px, 1.5vw, 12px)" }}>Kumari</span>
            </h1>
            <p className="role" style={{ color: "#e0e0e0", fontSize: "clamp(0.95rem, 3vw, 1.5rem)", margin: "clamp(0.5rem, 1.5vw, 1rem) 0", fontWeight: "500" }}>
                Web Developer &amp; Problem Solver
            </p>
<<<<<<< HEAD
            <p className="bio" style={{ lineHeight: "1.7", color: "#d0d0d0", fontSize: "clamp(0.85rem, 2.5vw, 1rem)", marginBottom: "clamp(1rem, 3vw, 2rem)" }}>
=======
            <p className="bio" style={{ lineHeight: "1.6", color: "white" }}>
>>>>>>> 3c44c24a76d7ec29d72418821d24269a2a0384fb
                I design and build modern, scalable, and responsive web applications
                using technologies like React, JavaScript, and Node.js. I focus on
                creating clean, efficient, and maintainable code that delivers
                seamless user experiences. Passionate about turning ideas into digital products.
            </p>
            <div className="ctas" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(12px, 2vw, 20px)", marginTop: "clamp(1.5rem, 4vw, 2rem)" }}>
                <a href="https://ik.imagekit.io/vzxwc5boa/Muasam_Final_CV.pdf?updatedAt=1773521178613" target="_blank" rel="noopener noreferrer" className="btn-hero bp" style={{ display: "flex", alignItems: "center", gap: "clamp(6px, 1.5vw, 10px)", padding: "clamp(9px, 2vw, 12px) clamp(16px, 4vw, 24px)", fontSize: "clamp(0.85rem, 2.5vw, 1rem)", whiteSpace: "nowrap" }}>
                <span>Resume</span> <FaDownload style={{ fontSize: "0.9em" }} />
                </a>
                
                <div className="social-icons" style={{ display: "flex", gap: "clamp(12px, 2.5vw, 20px)", fontSize: "clamp(1.3rem, 4vw, 1.8rem)" }}>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#c9a961", transition: "all 0.3s" }} onMouseOver={(e) => e.currentTarget.style.color = "#fff"} onMouseOut={(e) => e.currentTarget.style.color = "#c9a961"}} title="GitHub"><FaGithub /></a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#c9a961", transition: "all 0.3s" }} onMouseOver={(e) => e.currentTarget.style.color = "#fff"} onMouseOut={(e) => e.currentTarget.style.color = "#c9a961"}} title="LinkedIn"><FaLinkedin /></a>
                    <a href="mailto:mausam@example.com" style={{ color: "#c9a961", transition: "all 0.3s" }} onMouseOver={(e) => e.currentTarget.style.color = "#fff"} onMouseOut={(e) => e.currentTarget.style.color = "#c9a961"}} title="Email"><FaEnvelope /></a>
                </div>
            </div>
            </div>

        </div>
      </section>
    </>
  );
};

export default Hero;

