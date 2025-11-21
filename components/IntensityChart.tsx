import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { SkillMetric } from '../types';

interface SkillsRadarProps {
  data: SkillMetric[];
}

// Custom Tick Component for interactive labels
const CustomTick = ({ payload, x, y, textAnchor, stroke, radius }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <g
      className="recharts-layer recharts-polar-angle-axis-tick"
      transform={`translate(${x}, ${y})`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: 'default' }}
    >
      <text
        x={0}
        y={0}
        dy={4}
        textAnchor={textAnchor}
        fill={isHovered ? '#2563eb' : '#475569'} // Blue on hover, Slate-600 otherwise
        fontSize={isHovered ? 12 : 10}
        fontWeight={isHovered ? 800 : 700}
        style={{
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Bouncy transition
            transformOrigin: 'center',
            textShadow: isHovered ? '0 2px 10px rgba(37,99,235,0.2)' : 'none'
        }}
      >
        {payload.value}
      </text>
    </g>
  );
};

export const SkillsRadar: React.FC<SkillsRadarProps> = ({ data }) => {
  const chartData = data.map(skill => ({
    subject: skill.name,
    A: skill.level,
    fullMark: 100,
  }));

  return (
    <div className="h-72 w-full bg-white/40 backdrop-blur-md border border-white/50 p-4 rounded-3xl shadow-xl shadow-blue-900/5 relative overflow-hidden group">
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent pointer-events-none"></div>
      
      <h3 className="text-[10px] font-bold text-slate-500 mb-2 uppercase tracking-[0.2em] text-center relative z-10">Skills Profile</h3>
      
      <div className="h-[calc(100%-20px)] w-full relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
            <PolarGrid stroke="#cbd5e1" strokeDasharray="3 3" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={<CustomTick />} 
            />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              name="Skills"
              dataKey="A"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#radarGradient)"
              fillOpacity={0.6}
            />
            <defs>
              <linearGradient id="radarGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};