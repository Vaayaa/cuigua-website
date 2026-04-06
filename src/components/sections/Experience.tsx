import { useCallback, useState } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  BackgroundVariant,
  Panel,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { siteConfig } from '../../config/site';

function JonNode({ data}: { data: any }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="w-32 h-32 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#a855f7] flex items-center justify-center shadow-lg shadow-[#ff6b35]/20 cursor-pointer">
      <div className="text-center text-white">
        <div className="text-4xl mb-2">🟣</div>
        <span className="text-xs font-bold">{data.label}</span>
      </div>
    </motion.div>
  );
}

function MazeHeadNode({ data }: { data: any }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="w-28 h-28 rounded-2xl bg-[#1a1a24] border-2 border-[#22d3ee]/50 flex items-center justify-center shadow-lg shadow-[#22d3ee]/10 cursor-pointer">
      <div className="text-center text-white">
        <div className="text-3xl mb-1">🧩</div>
        <span className="text-xs font-bold">{data.label}</span>
      </div>
    </motion.div>
  );
}

function FacelessMonsterNode({ data }: { data: any }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="w-28 h-28 rounded-full bg-[#1a1a24] border-2 border-[#f472b6]/50 flex items-center justify-center shadow-lg shadow-[#f472b6]/10 cursor-pointer">
      <div className="text-center text-white">
        <div className="text-3xl mb-1">👾</div>
        <span className="text-xs font-bold">{data.label}</span>
      </div>
    </motion.div>
  );
}

function SoundNode({ data }: { data: any }) {
  const colors: Record<string, string> = {
    techno: 'from-[#ff6b35] to-[#ff6b35]/50',
    ambient: 'from-[#22d3ee] to-[#22d3ee]/50',
    downtempo: 'from-[#a855f7] to-[#a855f7]/50',
    idm: 'from-[#f472b6] to-[#f472b6]/50',
  };
  return (
    <motion.div whileHover={{ scale: 1.05 }} className={`w-24 h-24 rounded-xl bg-gradient-to-br ${colors[data.soundType] || 'from-gray-500 to-gray-500/50'} flex items-center justify-center shadow-lg cursor-pointer`}>
      <div className="text-center text-white">
        <div className="text-2xl mb-1">🎵</div>
        <span className="text-xs font-bold">{data.label}</span>
      </div>
    </motion.div>
  );
}

const nodeTypes = { jon: JonNode, mazeHead: MazeHeadNode, faceless: FacelessMonsterNode, sound: SoundNode };

const initialNodes: Node[] = [
  { id: 'jon', type: 'jon', position: { x: 400, y: 200 }, data: { label: '囧恩' } },
  { id: 'maze-head', type: 'mazeHead', position: { x: 650, y: 100 }, data: { label: '迷宫头' } },
  { id: 'faceless', type: 'faceless', position: { x: 650, y: 320 }, data: { label: '无脸怪兽' } },
  { id: 'techno', type: 'sound', position: { x: 150, y: 150 }, data: { label: 'Techno', soundType: 'techno' } },
  { id: 'ambient', type: 'sound', position: { x: 150, y: 280 }, data: { label: 'Ambient', soundType: 'ambient' } },
  { id: 'downtempo', type: 'sound', position: { x: 250, y: 380 }, data: { label: 'Downtempo', soundType: 'downtempo' } },
  { id: 'idm', type: 'sound', position: { x: 400, y: 420 }, data: { label: 'IDM', soundType: 'idm' } },
];

const initialEdges: Edge[] = [
  { id: 'e-jon-maze', source: 'jon', target: 'maze-head', animated: true, style: { stroke: '#ff6b35', strokeWidth: 2 }, label: '意识流', labelStyle: { fill: '#8a8a9a', fontSize: 12 }, labelBgStyle: { fill: '#12121a' } },
  { id: 'e-maze-faceless', source: 'maze-head', target: 'faceless', animated: true, style: { stroke: '#22d3ee', strokeWidth: 2 }, label: '情绪释放', labelStyle: { fill: '#8a8a9a', fontSize: 12 }, labelBgStyle: { fill: '#12121a' } },
  { id: 'e-techno-jon', source: 'techno', target: 'jon', animated: true, style: { stroke: '#ff6b35', strokeWidth: 2 }, label: '节奏驱动', labelStyle: { fill: '#8a8a9a', fontSize: 12 }, labelBgStyle: { fill: '#12121a' } },
  { id: 'e-ambient-maze', source: 'ambient', target: 'maze-head', animated: true, style: { stroke: '#22d3ee', strokeWidth: 2 }, label: '氛围渗透', labelStyle: { fill: '#8a8a9a', fontSize: 12 }, labelBgStyle: { fill: '#12121a' } },
  { id: 'e-downtempo-faceless', source: 'downtempo', target: 'faceless', animated: true, style: { stroke: '#a855f7', strokeWidth: 2 }, label: '情感共鸣', labelStyle: { fill: '#8a8a9a', fontSize: 12 }, labelBgStyle: { fill: '#12121a' } },
  { id: 'e-idm-jon', source: 'idm', target: 'jon', animated: true, style: { stroke: '#f472b6', strokeWidth: 2 }, label: '实验探索', labelStyle: { fill: '#8a8a9a', fontSize: 12 }, labelBgStyle: { fill: '#12121a' } },
];

export default function Experience() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<any>(null);

  const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    const nodeData = siteConfig.experience.nodes.find((n) => n.id === node.id);
    setSelectedNode(nodeData || { label: node.data.label, description: '点击节点查看详情' });
  }, []);

  return (
    <section id="experience" className="py-24 md:py-32 bg-[#0a0a0f] relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="text-sm text-[#22d3ee] font-mono tracking-widest mb-4 block">{siteConfig.experience.titleEn}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{siteConfig.experience.title}</h2>
          <p className="text-[#8a8a9a] max-w-xl mx-auto">{siteConfig.experience.description}</p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#22d3ee] to-[#f472b6] mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative rounded-3xl overflow-hidden border border-white/10" style={{ height: '600px' }}>
          <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} onNodeClick={onNodeClick} nodeTypes={nodeTypes} fitView attributionPosition="bottom-left" proOptions={{ hideAttribution: true }}>
            <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#ffffff10" />
            <Controls className="!bg-[#1a1a24] !border-white/10 !rounded-lg" />
            <MiniMap className="!bg-[#12121a] !border-white/10 !rounded-lg" nodeColor={(node) => { if (node.type === 'jon') return '#ff6b35'; if (node.type === 'mazeHead') return '#22d3ee'; if (node.type === 'faceless') return '#f472b6'; return '#a855f7'; }} />
            <Panel position="top-right" className="!bg-[#12121a]/90 backdrop-blur-sm !border !border-white/10 !rounded-lg !p-4 !m-4">
              <p className="text-xs text-[#8a8a9a] mb-2">操作提示</p>
              <div className="text-xs text-[#8a8a9a] space-y-1">
                <p>🖱️ 点击节点查看详情</p>
                <p>🔍 滚动缩放 · 拖拽平移</p>
                <p>✨ 节点可拖动</p>
              </div>
            </Panel>
          </ReactFlow>

          <AnimatePresence>
            {selectedNode && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 glass rounded-2xl p-6">
                <button onClick={() => setSelectedNode(null)} className="absolute top-3 right-3 text-[#8a8a9a] hover:text-white transition-colors"><X size={18} /></button>
                <h3 className="text-xl font-bold text-white mb-2">{selectedNode.label}</h3>
                <p className="text-sm text-[#8a8a9a]">{selectedNode.description}</p>
                {selectedNode.descriptionEn && <p className="text-xs text-[#8a8a9a]/60 mt-2">{selectedNode.descriptionEn}</p>}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
