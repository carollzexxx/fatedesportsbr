"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
    nick: z.string()
        .trim()
        .min(2, "O nick deve ter pelo menos 2 caracteres"),
    game: z.string().min(1, "Selecione um jogo"),
    elo: z.string().min(1, "Selecione seu elo"),
    role: z.string()
        .trim()
        .min(2, "Informe sua função no jogo"),
    contato: z.string()
        .trim()
        .min(3, "Informe seu Discord ou Instagram"),
});

type FormValues = z.infer<typeof formSchema>;

const GAME_ELOS = {
    valorant: [
        "Ferro", "Bronze", "Prata", "Ouro", "Platina", 
        "Diamante", "Ascendente", "Imortal", "Radiante"
    ],
    lol: [
        "Ferro", "Bronze", "Prata", "Ouro", "Platina", 
        "Esmeralda", "Diamante", "Mestre", "Grão-Mestre", "Desafiante"
    ]
} as const;

export default function RecruitmentForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nick: "",
            game: "",
            elo: "",
            role: "",
            contato: "",
        }
    });

    const selectedGame = watch("game") as keyof typeof GAME_ELOS | "";

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch("https://formspree.io/f/xpqbnzlg", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSuccess(true);
                reset();
            } else {
                const errorData = await response.json();
                setError(errorData.error || "Ocorreu um erro ao enviar. Tente novamente.");
            }
        } catch (_err) {
            setError("Erro de conexão. Verifique sua internet.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-black border border-purple-500/40 rounded-3xl p-12 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Inscrição Enviada!</h3>
                <p className="text-gray-400 mb-8">
                    Recebemos seu interesse. Nossa equipe entrará em contato em breve via Discord ou Instagram.
                </p>
                <button 
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-3 rounded-xl bg-zinc-900 border border-purple-500/20 hover:border-purple-500/50 transition text-sm font-semibold text-gray-200"
                >
                    Enviar outra resposta
                </button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-black border border-purple-500/20 rounded-3xl p-8 space-y-6 text-left shadow-2xl shadow-purple-900/10"
        >
            {/* Nickname */}
            <div className="space-y-2">
                <label htmlFor="nick" className="text-sm font-medium text-gray-300 ml-1 flex justify-between">
                    Seu Nick
                    <span className="text-purple-500/50 text-xs">* Obrigatório</span>
                </label>
                <input
                    {...register("nick")}
                    id="nick"
                    type="text"
                    autoComplete="nickname"
                    placeholder="Ex: Fated Player #BR1"
                    className={`w-full bg-zinc-900 border ${errors.nick ? 'border-red-500/50 focus:border-red-500' : 'border-purple-500/20 focus:border-purple-500'} rounded-xl px-4 py-4 outline-none transition duration-200 text-base text-white placeholder:text-gray-600`}
                />
                {errors.nick && <p className="text-red-400 text-xs mt-1 ml-1">{errors.nick.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Jogo */}
                <div className="space-y-2">
                    <label htmlFor="game" className="text-sm font-medium text-gray-300 ml-1">
                        Jogo Principal
                    </label>
                    <div className="relative">
                        <select
                            {...register("game")}
                            id="game"
                            className={`w-full bg-zinc-900 border ${errors.game ? 'border-red-500/50 focus:border-red-500' : 'border-purple-500/20 focus:border-purple-500'} rounded-xl px-4 py-4 outline-none transition appearance-none cursor-pointer text-base text-white`}
                        >
                            <option value="" className="bg-zinc-900">Selecione o jogo</option>
                            <option value="valorant" className="bg-zinc-900">Valorant</option>
                            <option value="lol" disabled className="bg-zinc-900 text-gray-600">League of Legends (Em breve)</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    {errors.game && <p className="text-red-400 text-xs mt-1 ml-1">{errors.game.message}</p>}
                </div>

                {/* Elo */}
                <div className="space-y-2">
                    <label htmlFor="elo" className="text-sm font-medium text-gray-300 ml-1">
                        Seu Elo
                    </label>
                    <div className="relative">
                        <select
                            {...register("elo")}
                            id="elo"
                            disabled={!selectedGame}
                            className={`w-full bg-zinc-900 border ${errors.elo ? 'border-red-500/50 focus:border-red-500' : 'border-purple-500/20 focus:border-purple-500'} rounded-xl px-4 py-4 outline-none transition appearance-none cursor-pointer text-base text-white disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                            <option value="" className="bg-zinc-900">
                                {selectedGame ? "Selecione seu elo" : "Selecione o jogo primeiro"}
                            </option>
                            {selectedGame && GAME_ELOS[selectedGame].map(elo => (
                                <option key={elo} value={elo.toLowerCase()} className="bg-zinc-900">
                                    {elo}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    {errors.elo && <p className="text-red-400 text-xs mt-1 ml-1">{errors.elo.message}</p>}
                </div>
            </div>

            {/* Role */}
            <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-medium text-gray-300 ml-1">
                    Função Principal
                </label>
                <input
                    {...register("role")}
                    id="role"
                    type="text"
                    placeholder="Ex: Duelista, Jungler, Entry..."
                    className={`w-full bg-zinc-900 border ${errors.role ? 'border-red-500/50 focus:border-red-500' : 'border-purple-500/20 focus:border-purple-500'} rounded-xl px-4 py-4 outline-none transition text-base text-white placeholder:text-gray-600`}
                />
                {errors.role && <p className="text-red-400 text-xs mt-1 ml-1">{errors.role.message}</p>}
            </div>

            {/* Contato */}
            <div className="space-y-2">
                <label htmlFor="contato" className="text-sm font-medium text-gray-300 ml-1">
                    Contato (Discord ou Instagram)
                </label>
                <input
                    {...register("contato")}
                    id="contato"
                    type="text"
                    autoComplete="username"
                    placeholder="Ex: @fated_joao ou joao#1234"
                    className={`w-full bg-zinc-900 border ${errors.contato ? 'border-red-500/50 focus:border-red-500' : 'border-purple-500/20 focus:border-purple-500'} rounded-xl px-4 py-4 outline-none transition text-base text-white placeholder:text-gray-600`}
                />
                {errors.contato && <p className="text-red-400 text-xs mt-1 ml-1">{errors.contato.message}</p>}
            </div>

            {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-sm">
                    {error}
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition font-bold shadow-xl shadow-purple-700/30 flex items-center justify-center gap-2 text-white"
            >
                {isSubmitting ? (
                    <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                    </>
                ) : (
                    "Enviar minha inscrição"
                )}
            </button>
            
            <p className="text-center text-[10px] text-gray-500 uppercase tracking-tighter">
                Ao enviar, você concorda em ser contatado pela Fated Organization.
            </p>
        </form>
    );
}
