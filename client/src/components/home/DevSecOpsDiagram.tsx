import React from 'react';
import { 
  Code, Shield, Server, PlayCircle, GitBranch, 
  FileCode, Users, TestTube, MonitorCheck, 
  ExternalLink, LayoutDashboard, ArrowRight
} from 'lucide-react';

const DevSecOpsDiagram = () => {
  return (
    <div className="relative overflow-hidden py-2 px-2">
      <style dangerouslySetInnerHTML={{
        __html: `
          .stage-card {
            transition: all 0.2s ease;
          }
          
          .stage-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            border-color: rgba(96, 165, 250, 0.5);
          }
          
          .pipeline-bg {
            position: absolute;
            border: 1px dashed rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            width: 95%;
            height: 200px;
            left: 2.5%;
            top: 90px;
            z-index: 0;
          }
          
          .product-card {
            border: 1px dashed rgba(234, 179, 8, 0.5);
            filter: drop-shadow(0 0 8px rgba(234, 179, 8, 0.3));
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          
          .animate-pulse-slow {
            animation: pulse 2s ease-in-out infinite;
          }
        `
      }} />
      
      <div className="text-center text-sm font-semibold text-slate-200 mb-4">
        <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          iCopilot DevSecOps Pipeline
        </span>
      </div>
      
      {/* Security Banner at Top */}
      <div className="mb-6">
        <div className="flex justify-center">
          <div className="stage-card bg-slate-800 border border-red-900/40 rounded-lg p-3 w-[200px] flex flex-col items-center z-10">
            <div className="bg-red-600/30 p-2 rounded-full mb-2">
              <Shield className="h-5 w-5 text-red-400" />
            </div>
            <h3 className="text-slate-200 text-xs font-semibold mb-1">Security</h3>
            <div className="text-[10px] text-slate-400 text-center">Integrated Throughout the Pipeline</div>
          </div>
        </div>
        <div className="flex justify-center mt-1">
          <ArrowRight className="text-red-500/40 h-5 w-5 transform rotate-90" />
        </div>
      </div>
      
      {/* Pipeline Background */}
      <div className="pipeline-bg"></div>
      
      {/* Main Pipeline Flow */}
      <div className="relative z-10 flex flex-nowrap justify-between items-center px-2 py-4 overflow-visible">
        {/* Plan */}
        <div className="flex flex-col items-center">
          <div className="stage-card bg-slate-800 border border-slate-700 rounded-lg p-3 w-[100px] flex flex-col items-center">
            <div className="bg-blue-600/30 p-2 rounded-full mb-2">
              <Users className="h-5 w-5 text-blue-400" />
            </div>
            <h3 className="text-slate-200 text-xs font-semibold mb-1">1. Plan</h3>
            <div className="text-[10px] text-slate-400 text-center">Requirements</div>
          </div>
        </div>
        
        {/* Arrow */}
        <ArrowRight className="text-blue-500/60 h-4 w-4 mx-1" />
        
        {/* Code */}
        <div className="flex flex-col items-center">
          <div className="stage-card bg-slate-800 border border-slate-700 rounded-lg p-3 w-[100px] flex flex-col items-center">
            <div className="bg-indigo-600/30 p-2 rounded-full mb-2">
              <Code className="h-5 w-5 text-indigo-400" />
            </div>
            <h3 className="text-slate-200 text-xs font-semibold mb-1">2. Code</h3>
            <div className="text-[10px] text-slate-400 text-center">Development</div>
          </div>
        </div>
        
        {/* Arrow */}
        <ArrowRight className="text-blue-500/60 h-4 w-4 mx-1" />
        
        {/* Build */}
        <div className="flex flex-col items-center">
          <div className="stage-card bg-slate-800 border border-slate-700 rounded-lg p-3 w-[100px] flex flex-col items-center">
            <div className="bg-green-600/30 p-2 rounded-full mb-2">
              <FileCode className="h-5 w-5 text-green-400" />
            </div>
            <h3 className="text-slate-200 text-xs font-semibold mb-1">3. Build</h3>
            <div className="text-[10px] text-slate-400 text-center">CI Pipeline</div>
          </div>
        </div>
        
        {/* Arrow */}
        <ArrowRight className="text-blue-500/60 h-4 w-4 mx-1" />
        
        {/* Test */}
        <div className="flex flex-col items-center">
          <div className="stage-card bg-slate-800 border border-slate-700 rounded-lg p-3 w-[100px] flex flex-col items-center">
            <div className="bg-amber-600/30 p-2 rounded-full mb-2">
              <TestTube className="h-5 w-5 text-amber-400" />
            </div>
            <h3 className="text-slate-200 text-xs font-semibold mb-1">4. Test</h3>
            <div className="text-[10px] text-slate-400 text-center">Validation</div>
          </div>
        </div>
        
        {/* Arrow */}
        <ArrowRight className="text-blue-500/60 h-4 w-4 mx-1" />
        
        {/* Release */}
        <div className="flex flex-col items-center">
          <div className="stage-card bg-slate-800 border border-slate-700 rounded-lg p-3 w-[100px] flex flex-col items-center">
            <div className="bg-cyan-600/30 p-2 rounded-full mb-2">
              <GitBranch className="h-5 w-5 text-cyan-400" />
            </div>
            <h3 className="text-slate-200 text-xs font-semibold mb-1">5. Release</h3>
            <div className="text-[10px] text-slate-400 text-center">Versioning</div>
          </div>
        </div>
      </div>
      
      {/* Second Row - Deploy, Operate, Monitor */}
      <div className="relative z-10 mt-16 flex justify-between items-center px-10">
        {/* Deploy */}
        <div className="flex flex-col items-center">
          <div className="stage-card bg-slate-800 border border-slate-700 rounded-lg p-3 w-[100px] flex flex-col items-center">
            <div className="bg-blue-600/30 p-2 rounded-full mb-2">
              <PlayCircle className="h-5 w-5 text-blue-400" />
            </div>
            <h3 className="text-slate-200 text-xs font-semibold mb-1">6. Deploy</h3>
            <div className="text-[10px] text-slate-400 text-center">Environments</div>
          </div>
        </div>
        
        {/* Operate */}
        <div className="flex flex-col items-center">
          <div className="stage-card bg-slate-800 border border-slate-700 rounded-lg p-3 w-[100px] flex flex-col items-center">
            <div className="bg-emerald-600/30 p-2 rounded-full mb-2">
              <Server className="h-5 w-5 text-emerald-400" />
            </div>
            <h3 className="text-slate-200 text-xs font-semibold mb-1">7. Operate</h3>
            <div className="text-[10px] text-slate-400 text-center">Infrastructure</div>
          </div>
        </div>
        
        {/* Monitor */}
        <div className="flex flex-col items-center">
          <div className="stage-card bg-slate-800 border border-slate-700 rounded-lg p-3 w-[100px] flex flex-col items-center">
            <div className="bg-pink-600/30 p-2 rounded-full mb-2">
              <MonitorCheck className="h-5 w-5 text-pink-400" />
            </div>
            <h3 className="text-slate-200 text-xs font-semibold mb-1">8. Monitor</h3>
            <div className="text-[10px] text-slate-400 text-center">Observability</div>
          </div>
        </div>
      </div>
      
      {/* Flow Arrows connecting bottom row to top (continuous cycle) */}
      <div className="relative z-10">
        <div className="absolute left-[38%] top-[174px] transform rotate-90">
          <ArrowRight className="text-blue-500/60 h-4 w-4" />
        </div>
        <div className="absolute right-[38%] top-[174px] transform -rotate-90">
          <ArrowRight className="text-blue-500/60 h-4 w-4" />
        </div>
      </div>
      
      {/* Self-Service Portal - Final Product */}
      <div className="mt-12 flex justify-center">
        <div className="flex flex-col items-center">
          <ArrowRight className="h-6 w-6 text-yellow-500/60 transform rotate-90 mb-2" />
          <div className="product-card stage-card bg-slate-800 rounded-lg p-3 w-[220px] flex flex-col items-center animate-pulse-slow">
            <div className="bg-yellow-600/30 p-2 rounded-full mb-2">
              <LayoutDashboard className="h-5 w-5 text-yellow-400" />
            </div>
            <h3 className="text-yellow-200 text-xs font-semibold mb-1">Self-Service Portal</h3>
            <div className="text-[10px] text-slate-300 text-center">Customer Accessible Platform<br />for Environment Management</div>
            <div className="absolute top-1 right-1">
              <ExternalLink className="h-3 w-3 text-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevSecOpsDiagram;