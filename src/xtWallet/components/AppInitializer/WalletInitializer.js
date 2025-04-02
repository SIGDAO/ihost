import {useEffect} from "react";
import { GenericExtensionWallet} from "@signumjs/wallets";
import {useAppContext} from '../../hooks/useAppContext';
import {requestWalletConnection} from '../../requestWalletConnection';
import {actions, selectIsWalletConnected} from "../../states/walletState";
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';

export const WalletInitializer = () => {
    const dispatch = useAppDispatch();
    const { Ledger, Wallet, DAppName } = useAppContext();
    const isWalletConnected = useAppSelector(selectIsWalletConnected);

    function onWalletConnected(connection) {
        dispatch(actions.setIsWalletConnected(true));
        dispatch(actions.setWalletNodeHost(connection.currentNodeHost));
        dispatch(actions.setWalletPublicKey(connection.publicKey || ""));
    }

    useEffect(() => {
        let listener= null;

        function handleDisconnectWallet() {
            listener && listener.unlisten();
            dispatch(actions.setIsWalletConnected(false));
            dispatch(actions.setWalletNodeHost(""));
            dispatch(actions.setWalletPublicKey(""));
            Wallet.Extension = new GenericExtensionWallet();
        }


        function onNetworkChange(args) {
            dispatch(actions.setWalletNodeHost(args.networkHost));
            if (args.networkName === Ledger.Network) {
                if(!isWalletConnected){
                    requestWalletConnection()
                }
            }
            else {
                alert("Wallet changed to another network")
            }
        }

        function onAccountChange(args) {
            dispatch(actions.setWalletPublicKey(args.accountPublicKey));
        }

        function onPermissionOrAccountRemoval() {
            alert("Wallet removed this DApps permission")
            handleDisconnectWallet();
        }

        function handleExtensionErrors(e) {
            // alert(e.message)
            actions.setWalletError(e)
        }

        async function handleConnectWallet() {
            if (isWalletConnected) return;

            try {
                const connection = await Wallet.Extension.connect({
                    appName: DAppName,
                    networkName: Ledger.Network,
                });

                onWalletConnected(connection)

                listener = connection.listen({
                    onNetworkChanged: onNetworkChange,
                    onAccountChanged: onAccountChange,
                    onPermissionRemoved: onPermissionOrAccountRemoval,
                    onAccountRemoved: onPermissionOrAccountRemoval,
                });
            } catch (e) {
                handleExtensionErrors(e);
            }
        }

        window.addEventListener("connect-wallet", handleConnectWallet);
        window.addEventListener("disconnect-wallet", handleDisconnectWallet);
        return () => {
            listener && listener.unlisten();
            window.removeEventListener("connect-wallet", handleConnectWallet);
            window.removeEventListener("disconnect-wallet", handleDisconnectWallet);
        };
    }, [isWalletConnected, Wallet.Extension]);

    useEffect(() => {
        if (isWalletConnected) return;
        requestWalletConnection();
    }, [isWalletConnected]);

    return null;
};
